---
sidebar_position: 3
---

# 创建一个博客帖子

Docusaurus为每一篇博客文章创建一个**页面，还有**博客索引页面**、**标签系统**、**RSS**提要……

## 创建你的第一个帖子

创建一个文件在 `blog/2021-02-28-greetings.md` :

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: IO0288
    title: Hello
    url: https://github.com/IO0288
    image_url: https://github.com/IO0288.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

如果blog下的authors.yml存在，则可以不必重复的写那些复杂的内容，只需要调用就好了

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors: [IO0288]
tags: [greetings]
---
```

现在可以在 `http://localhost:3000/blog/greetings` 上看到一篇新的博客文章。
