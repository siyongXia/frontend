module.exports = {
  base: '/frontend/dist/',
  dest: 'dist',
  title: '健康160前端分享',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '移动端远程调试',
        collapsable: true,
        children: [
          '/debug/',
        ]
      },
      {
        title: '原生JS',
        collapsable: true,
        children: [
          '/native/JavaScript.md',
        ]
      },
      {
        title: '面向对象',
        collapsable: true,
        children: [
          '/oop/',
        ]
      },
    ]
  }
}