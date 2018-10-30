module.exports = {
  base: '/frontend/',
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
    ]
  }
}