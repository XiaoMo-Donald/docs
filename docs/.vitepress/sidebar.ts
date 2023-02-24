export default {
  "/": [
    {
      text: "开始阅读",
      collapsible: false,
      collapsed: false,
      items: [
        { text: "阅读须知", link: "/guide" },
        { text: "2022 年终总结", link: "/report/2022" },
      ],
    },
    {
      text: "📘 TS 学习",
      collapsible: true,
      collapsed: false,
      items: [{ text: "导读", link: "/ts/guide" }],
    },
    {
      text: "📗 编程学习",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "发布 npm 包", link: "/program/npm" },
        { text: "algolia 搜索", link: "/program/algolia" },
      ],
    },
    {
      text: "📝 备忘录",
      collapsible: true,
      collapsed: false,
      items: [{ text: "Git 命令", link: "/memo/git" }],
    },
  ],
  "/open/": [
    {
      text: "🧑‍💻 开源之路",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "开源导读", link: "/open/guide" },
        { text: "uni-halo", link: "/open/uni-halo" },
      ],
    },
  ],
  "/green/": [
    {
      text: "🌱 青葱岁月",
      collapsible: true,
      collapsed: false,
      items: [{ text: "阅读须知", link: "/green/guide" }],
    },
  ],
  "/tool/": [
    {
      text: "🎒 常用工具",
      collapsible: true,
      collapsed: false,
      items: [{ text: "Emoji图标", link: "/tool/emoji-list" }],
    },
  ],
  "/sundry/": [
    {
      text: "🔍 技术杂项",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "阅读须知", link: "/sundry/guide" },
        { text: "vitepress 大图预览", link: "/sundry/doc-add-gallery" },
      ],
    },
  ],
  "/about/": [
    {
      text: "📝 关于我",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "开篇", link: "/about/guide" },
      ],
    },
  ],
};
