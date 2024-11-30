import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/boats/",
  title: "渔舟",
  description: "架空世界剧情，与现实世界无关。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '虚拟架空剧情，请勿代入现实',
      copyright: 'Copyright © 2024 WindLin Studio'
    },    
    nav: [
      { text: '关于游戏', link: '/setting/about' },
      { text: '更新日志', link: '/setting/open/update' },
      { text: '开发者功能', link: '/setting/open/develop' }
    ],

    outlineTitle: '数据索引',
    outline: [2, 6],

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/sysyz-itcom' }
//    ]
  }
})
