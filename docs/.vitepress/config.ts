import { generateSitemap as sitemap } from "sitemap-ts";
import sidebar from "./sidebar";
import socialLinks from "./link";
import algolia from "./algolia";

import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  outDir: "../dist",
  title: "小莫唐尼知识库",
  description: "一起分享技术的快乐.",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  themeConfig: {
    logo: "/logo.png",
    recommend: {
      mpwx: "/wx_qrcode.png",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT 小莫唐尼 contributors",
    },
    nav: [
      { text: "🧑‍💻 开源之路", link: "/open/guide" },
      { text: "🔥 前端算法", link: "/algorithm/guide" },
      { text: "🔥 TS 学习", link: "/ts/guide" },
      { text: "🔧 编程工具", link: "/tool/" },
      { text: "🌱 青葱岁月", link: "/green/guide" },
      {
        text: "作者站点",
        items: [
          {
            text: "作者主页",
            link: "https://www.925i.cn",
          },
          {
            text: "作者博客",
            link: "https://b.925i.cn",
          },
          {
            text: "uni-halo文档",
            link: "https://uni-halo.925i.cn",
          },
          {
            text: "uni-halo仓库",
            link: "https://gitee.com/ialley-workshop-open/uni-halo",
          },
        ],
      },
      { text: "🌱 技术杂项", link: "/sundry/guide" },
    ],
    editLink: {
      pattern: "https://github.com/XiaoMoDonnie/docs/edit/main/docs/:path",
    },
    algolia,
    sidebar,
    socialLinks,
  },
  async buildEnd() {
    await sitemap({ hostname: "https://docs.925i.cn/" });
  },
};
