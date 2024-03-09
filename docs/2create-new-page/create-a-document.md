---
sidebar_position: 2
---

# 创建文档

文档是**页面组**通过以下方式连接:

- **侧边栏**
- **前/下一个导航**
- **版本管理**

## 创建你的第一个文档

创建一个markdown文件在 `docs/hello.md` :

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

现在可以在 `http://localhost:3000/docs/hello` 上找到一个新文档。

## 配置侧边栏

Docusaurus会自动从 `docs` 文件夹中创建一个侧边栏。 添加元数据自定义侧边栏标签和位置:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在 `sidebars.js` 中显式创建你的侧边栏:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```