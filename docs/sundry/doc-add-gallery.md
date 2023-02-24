# 给 vitepress 添加图片放大预览效果

### 背景

由于 vitepress 没有自带的图片预览功能，导致有时候放置一些图片的时候看不清楚，而`markdown-it-custom-attrs`正好可以解决这个问题。

### 准备工作

- 一、安装依赖：`markdown-it-custom-attrs`

```bash
npm i markdown-it-custom-attrs
or
pnpm i markdown-it-custom-attrs
or
ynpm add markdown-it-custom-attrs
```

- 二、引入和配置插件
  找到` .vitepress`中的`config.js` 文件，加入以下代码

```javascript
import mdItCustomAttrs from "markdown-it-custom-attrs";
export default {
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  // 省略其他配置...
};
```

- 三、引入图片灯箱 js 和 css 文件
  还是找到` .vitepress`中的`config.js` 文件，加入以下代码

```javascript
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
  // 省略其他配置...
};
```

- 四、使用图片和渲染效果

```html
<!-- markdown语法 -->
![](图片地址)

<!-- 最终渲染结果 -->
<img src="图片地址" data-fancybox="gallery" />
```
