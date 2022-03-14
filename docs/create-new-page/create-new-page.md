---
id: create-new-page
title: 创建新页面
sidebar_position: 1
sidebar_label: Easy
sidebar_class_name: green
tags: [标签, 开始使用]
---

[plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)

```mdx title="docs/intro.md"
---
id: intro # 文档id
title: 指南 # 文档名
sidebar_position: 1 # 侧边栏显示顺序
sidebar_label: Easy # 侧边栏显示名
sidebar_class_name: green # 指定侧边栏该选项类
tags: [标签, 开始使用] # 文档标签
---
```

```json title="docs/create-new-page/_category_.json"
{
    "label": "创建新的页面",
    "position": 2,
    "collapsible": true,
    "collapsed": false,
    "className": "red", # 指定侧边栏该选项类
    "link": {
        "type": "doc",
        "id": "create-new-page"
    }
}
```
