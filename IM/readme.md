# 健康商城客服咨询
## 技术栈
vue + websocket(paho.mqtt) + protobuf
- vue MVVM框架,数据绑定
- websocket 利用paho.mqtt框架创建websocket链接 [文档](https://www.eclipse.org/paho/files/jsdoc/Paho.MQTT.Client.html)
- protobuf 实现字符串跟二进制之间的相互转换

友情提示: IM最难的并不是websocket,而是交互
##  websocket链接的创建
```
initWebsocket(){
    var that = this;
    var options = { // websocket 连接的配置
        useSSL:true, // 开启安全传输 wss
        userName:this.user.user_id, // 用户名,通过接口获取
        password:this.user.access_token, // 密码,通过接口获取
        keepAliveInterval:10, // 发送心跳的时间,单位s, 不设置长时间不发消息websocket会自动断开
        timeout: 10, // 发送消息超时的时间
        onSuccess: function () { // websocket链接成功的回调
        }
        onFailure: function (message) { // websocket链接失败的回调
            console.log("Connection failed: " + message.errorMessage);
        }
    };
    this.clientSocket = new PahoMQTT.Client('wss://msgwss.91160.com/mqtt', this.client_id);  // 通过域名连接
    // this.clientSocket = new PahoMQTT.Client('10.1.95.159',8090, this.client_id); // 通过ip跟端口连接
    this.clientSocket.connect(options);
}
```
## IM消息体组装
1. IM消息体格式参考链接 [confluence](http://confluence.rd.91160.com/pages/viewpage.action?pageId=12988649)
2. 实际应用
```
var obj = {
    content:JSON.stringify({
        type: 1, // 1.普通消息2.图片, 其他值参考confluence
        business_id:this.orderNo,
        business_type:20,
        receiver_type:1, //2代表医生,1代表患者,3//平台客服/4:商家客服
        networkProvider:'webIm',
        networkType:'-2'
    }),
    send_time: + new Date(),
    sender_uid:this.user.user_id.toString(), // 发送者的user_id
    receiver_uid:this.customer_id.toString(), // 接收者的user_id
    member_id:0, // 家庭成员id,健康商城客服聊天固定是0,随访的时候选择对应的家庭成员
    message_id:getUuid(), // uuid,随机不重复的字符串
    guid:'',
    session_id:this.session_id, // 由sender_uid和receiver_uid组成,值小的在前,大的在后, ${receiver_uid}_${sender_uid}
    business_type:20 // 具体指参考confluence
}
```
## 如何转换成二进制
1. 方法一(运用于wechat-vue仓库)
```
# MessageFormat_pb.js 是由c++程序protoc将IM.proto(文件路径'./IM.proto')文件转换成的,
# 具体命令 protoc --js_out=import_style=commonjs,binary:. IM.proto
import Message_pb from '../../../plugins/protobuf/MessageFormat_pb.js'
this.message = new Message_pb.Message();  
serializeBinary(obj){//将内容序列化成protobuf格式
    this.message.setContent(obj.content);
    this.message.setSendTime(obj.send_time);
    this.message.setReceiverUid(obj.receiver_uid);
    this.message.setMemberId(obj.member_id);
    this.message.setMessageId(obj.message_id);
    this.message.setGuid(obj.guid);
    this.message.setSenderUid(obj.sender_uid);
    this.message.setSessionId(obj.session_id);
    this.message.setBusinessType(obj.business_type);
    return this.message.serializeBinary();
}
var buffer = serializeBinary(obj)
```
2. 方法二(运用于91160-com仓库)推荐
```
// protobuf 为外部应用的js库
protobuf.load("/im/js/IM.proto", function(err, root) {
    if (err) {
        reject(err)
    }else {
        that.Message = root.lookupType("IMpackage.Message");
        resolve()
    }
});
var buffer = that.Message.encode(obj).finish();
```
## IM消息发送
1. 发送
```
// client.send(topic,payload,qos);
this.clientSocket.send('PTP',buffer,2);
// PTP 后端定制的主题
// buffer obj转换成的buffer
// qos: 0 Best effort (default). 1 At least once. 2 Exactly once.
```
1. 如何知道成功发送
```
// java收到消息之后会自动发送一个确认的消息,客户端的websocket会触发onMessageDelivered
this.clientSocket.onMessageDelivered = function(message){ // 消息送达的回调
    console.log('message Delivered');
    console.log(message) // message为自己最开始send的内容
    var msg = that.message.toObject(message.payloadBytes) //  that.message.toObject方法会将二进制转换成对象
    
};
```
## IM消息接收
1. 接受消息
```
// websocket监听onMessageArrived时间,当别的人发送消息给自己是会触发onMessageArrived
this.clientSocket.onMessageArrived = function (message) { // broker消息送达
} 
```
2. 接受的消息是二进制,需要解码
方法一 (wechat-vue)
```
var array = that.message.deserializeBinary(message.payloadBytes).array,
obj = {};
obj.content = JSON.parse( array[0] );
obj.send_time = array[1];
obj.receiver_uid = array[2];
obj.sender_uid = array[3];
obj.member_id = array[4];
obj.message_id = array[5];
obj.guid = array[6];
obj.session_id = array[7];
obj.business_type = array[8];
obj.is_read = 0;
console.log(obj)

```
方法二(91160-com)推荐
```
protobuf.load("/im/js/IM.proto", function(err, root) {
    if (err) {
        reject(err)
    }else {
        that.Message = root.lookupType("IMpackage.Message");
        resolve()
    }
});
var message = that.Message.decode(message.payloadBytes);
```
## websocket连接重新连接
```
// websocket 连接断开,会触发onConnectionLost回调
 this.clientSocket.onConnectionLost = function (responseObject) {//websocket断开重新连接
    var options = { // 配置参考上面连接的时候
    };
    that.clientSocket.connect(options);
};
```

