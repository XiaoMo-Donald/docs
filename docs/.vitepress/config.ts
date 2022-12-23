import { generateSitemap as sitemap } from 'sitemap-ts'
import sidebar from "./sidebar";
import socialLinks from "./link";
import algolia from "./algolia";


export default {
  outDir: '../dist',
  title: "小莫唐尼知识库",
  description: "一起分享技术的快乐.",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.png',
    recommend: {
      mpwx: "../public/wx_qrcode.jpg",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT 小莫唐尼 and 小莫唐尼知识库 contributors",
    },
    nav: [
      { text: "🔥 前端算法", link: "/algorithm/ch" },
      { text: "🔥 TS 学习", link: "/ts/ch" },
      { text: "🔧 编程工具", link: "/tool/" },
      { text: "🌱 青葱岁月", link: "/green/ch" },
    ],
    editLink: {
      pattern: "https://github.com/XiaoMoDonnie/docs/edit/main/docs/:path",
    },
    algolia,
    sidebar,
    socialLinks,
  },
  async buildEnd() {
    await sitemap({ hostname: 'https://docs.925i.cn/' });
  }
}
