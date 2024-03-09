---
id: MFM
title: MFM——Markup language For Misskey
sidebar_position: 3
sidebar_label: Markup language For Misskey
tags: [Note, Markdown, LaTeX, Misskey, MFM]
---

# Markup language For Misskey

> Misskey可以使用的Markdown风格的语法。

Markup language For Misskey(MFM)是可以在Misskey内各个地方使用的专用标记语言。
在这里，可以确认在Misskey上可以使用的MFM语法列表。

From:  [wiki.misskey.io](https://wiki.misskey.io/ja/function/mfm)

# MFM适用范围

1. 帖子

   > 在笔记本菜单中复制内容的话，原来的文本会复制到剪贴板上，所以通过粘贴到记事本等可以确认使用什么样的MFM。

2. 个人简介

3. 页面

4. 实例说明文以及通知等

   > MFM如果是Misskey服务器之间的话，在其他服务器上也会显示，但是在ActivityPub对应的**其他**SNS服务中**不一定全部显示**装饰等内容。

# 基础的MFM

> 这个MFM在提及和标签等Misskey身边的地方也被使用。

## 提及

可以用(At标记)`@`+用户名向特定用户发送通知。

```MFM
@IO0288
```

## 标签

可以用(At标记)`#`+标签名来加上标签。

```MFM
#Steam年度回顾
```

> 在@或#后面输入文字就会出现候选列表。这个列表随着输入文字而缩小，所以如果在列表中找到要找的用户或标签的话，可以使用箭头键或Tab来选择，也可以用 Enter 键完成输入。不愧是Misskey！

## 文本装饰

说到MFM，很多人会联想到这个。通过将文本用特定的符号或字符串包围，使文章更容易阅读，可以明确上下文的功能。

### 加粗

用两个星号`**`前后包围文本，可以**粗体**显示和**强调**文字。

```MFM
可以**粗体**显示和**强调**文字。
```

### 斜体

`<i>`和`</i>`包围文本的话，文字可以变成*斜体*。

```MFM
文字可以变成<i>斜体</i>
```

### 删除线

将文本用两个波浪线`~~`和`~~`包围的话，可以添加~~取消~~删除线。

```MFM
可以添加~~取消~~删除线。
```

### 小字

`<small>`和`</small>`包围文本的话，文字可以显示得<small>小一点</small>。

```MFM
文字可以显示得<small>小一点</small>。
```

### 居中

`<center>`和`</center>`包围文本的话，文字可以**居中**。

```MFM
<center>Hello</center>
<center>你好</center>
```

### 文本翻转

文本可以反转，使用方括号和命令。是Misskey.v12的新功能。

#### 左右翻转

使用`$[flip.h`+要反转的文本`]`来左右翻转文本。

#### 上下翻转

使用`$[flip.v`+要反转的文本`]`来上下翻转文本。

#### 上下左右翻转

使用`$[flip.h,v`+要反转的文本`]`来上下左右翻转文本(旋转180°)。

## 文本的应用

和MD语法一样，使用`>`来引用文本。

```MFM
> 被引用的内容
>> 被引用的内容
```

# 高级的MFM

虽是高级，但仅仅是内部处理的不同，语法本身被设计得非常容易编写。

## 搜索窗口

只需在句子末尾添加 `検索` 一个单词即可显示已输入的搜索框。

> 除了 `検索` 之外，还有其他 `[検索]` 、`Search`  、 `[Search]` 等 的字符串。 只要把它们放在句子的末尾，它们都同样有效。

```MFM
藍ちゃん　戦闘レベル　検索

AiScript とは [検索]

Is Misskey Mastodon? Search

What is a Miskist? [Search]
```



## URL

当您粘贴 URL 时，它将自动链接。

## Link

通过将要用作链接的文本括在方括号 `[` `]`中，并在其旁边添加括在括号`(` `)` 中的 URL，可以将方括号中的句子链接到括号中的 URL 。

```MFM
[Misskey記事](https://k-tai.watch.impress.co.jp/docs/column/minna/1474357.html)
or
【Pleromaへいますぐアクセス！】
ツイッターのリンクはこちら！！
→　?[mstdn.jp](https://misskey.io)
```

> 您可以在方括号前添加问号`?` 以隐藏链接卡。 
>
> 当在一个笔记本中写入大量链接或作为防止剧透功能时，它很有用，但它也可用于隐藏链接目标的内容。 它不仅限于 Misskey，但要警惕您在互联网上看到的可疑链接，这些链接上写着“立即访问！

## 自定义表情

`:` 您可以将自定义表情符号名称 `:` 括在冒号中以显示自定义表情符号。

```MFM
:ai_icon:
```

## 内联代码

如果将程序的代码括在一行（内联）中，并带有重音 ``` 和 ``` ，它将突出显示语法。

## 块代码

如果要对多行代码进行语法突出显示，可以通过将其括 ````` 在三元组重音 ````` 和 . 显然，它使用Prism .js[需要验证]，这意味着它支持多达236种语言的语法突出显示。 这很危险，小姐！

> 内联代码和块代码中的句子不受 MFM 的约束，无论你写什么（几乎）任何东西，它都会按原样反映，因此它可以用于特殊语法引用，以及 ASCII 艺术......！

## 文本动画

毫不夸张地说，MFM最大的特点就是这个动画。 这是一个允许您使用方括号和可在 Misskey.v12 中使用的命令组合移动笔记中的文本的功能！ 写作风格简洁而有规律，是所有动画所共有的，但其中一些允许您 `,` 使用逗号设置参数。 这很简单，但很复杂...... 这就是MFM动画。

### 果冻

可以添加类似果冻的“biyon-biyon”动画。

![果冻](https://wiki.misskey.io/ja_jp/mfm/ss_jelly.gif)

```MFM
$[jelly 果冻效果]
　$[jelly 🍮]
```

### emoji表情

如果你把文字括在 `$[tada`和`]` 中，你可以添加一个动画，比如“Shazam！”，这真是太棒了。

![anim](https://wiki.misskey.io/ja_jp/mfm/ss_tada3.gif)

```MFM
$[tada \ﾍｲﾗｯｼｬｲ/]
$[tada SUSHI]$[tada 🍣]$[tada 食べたい]$[tada 🙏] $[tada この世]$[tada 🌏]の$[tada 終わり]$[tada 👋]の$[tada 日]は $[tada SUSHI]$[tada 🍣]$[tada 食べたい]$[tada 🙏] $[tada 最後]$[tada 💥💣]の$[tada 晩餐]$[tada 🍴]に$[tada 😇]$[tada SUSHI]$[tada 🍣]$[tada 食べたい]$[tada 🙏] $[tada 特別]$[tada 🎂🎉🏆💏]な$[tada あの日]$[tada 📆]には $[tada SUSHI]$[tada 🍣]$[tada 食べたい]$[tada 🙏🙏] $[tada トロ🐟]$[tada タコ🐙]$[tada ウニ✳︎]$[tada いくら💰] $[tada 🔊]$[tada ﾃｰﾚｰﾚｰ↑]$[tada (セ〜〜〜ル)]$[tada (都会のオアスシ)]
```



### 跳跃

```MFM
$[jump ]
```

### 弹跳

通过用`$[bounce`和 `]` 括起文本，您可以添加一个球状的“Poyonpoyon”动画。

![弹跳](https://wiki.misskey.io/ja_jp/mfm/ss_bounce.gif)

```MFM
$[bounce 🏈]　$[bounce 🏀]　$[bounce 🤢]　$[bounce ⚾]　$[bounce 🧶]
```

### 晃动

如果用`$[shake`和 `]`括起文本，则可以添加当场颤抖的“摇晃”动画。

![晃动](https://wiki.misskey.io/ja_jp/mfm/ss_shake.gif)

```MFM
$[shake 🥶]「左边的表情将会抖动」
```

### 模糊

如果将文本括在 `$[twitch` 和 `]` 中，则可以添加强烈运动的“模糊”动画。（太粗了哈哈）

```MFM
$[twitch 🕴🏡🕴🏢]
```



> “模糊”意味着所有文本的移动方式相同，而“摇晃”从中心移动最多，在边缘移动最多，在中间移动的距离最小。

## 文本动画（旋转）

可以给出旋转动画。 最基本的旋转是 Z 轴右旋转，可以通过将 `$[spin `和 `]` 括起来来使用，但在最新版本中，现在可以指定参数，现在可以进行非常高级的设置。

### Z轴旋转

旋转从 Z 轴（从监视器上看到的中心点）开始执行。

顺时针、逆时针、顺时针和逆时针交替。

```MFM
$[spin.z,right 🍮]
$[spin.z,left 🍮]
$[spin.z,alternate ]
```

### X轴旋转

旋转从 X 轴（从显示器上看到的水平轴）开始执行。

```MFM
$[spin.x,right 🍮]
$[spin.x,left 🍮]
$[spin.x,alternate ]
```

### Y轴旋转

旋转从 Y 轴（从显示器上看到的垂直轴）开始执行。

```MFM
$[spin.y,right 🍮]
$[spin.y,left 🍮]
$[spin.y,alternate ]
```

> 如果省略 `$[spin` 后面的轴说明符，则自动将其视为 Z 轴旋转 （ `.z` ）。 此外，如果省略后面的旋转方向说明符， `,` 则会自动将其视为右旋转 （ `right` ）。

### 旋转速度

`$[spin` 您可以通过添加到语法中`,speed=` 来指定旋转速度，例如。

```MFM
$[spin.y,left,speed=12s 🌓　　　☀　　　🌏]
```

也可以使用 指定 `ms` 毫秒。

```MFM
$[spin.y,left,speed=100ms 🌓　　　☀　　　🌏]
```

## LaTeX表达

Misskey被称为最强社交网站的原因之一是因为LaTeX。

通过用反斜杠和括号括起来 `\(` ， `\)` 可以使用大量的 TeX 函数。

> LaTeX 的功能太多了，略。 完整的功能列表可以在[katex.org官方文档](https://katex.org/docs/supported.html)中找到。

> 从 v13 开始不再支持 LaTeX。

## 颜色

### 文本颜色

`\textcolor{}{}`可用于： 第一个大括号指定`{`颜色`}`，第二个大括号可以包含`{`文本`}`。

```MFM
😺\(\textcolor{chocolate}{Hello}\)😺你好
```

### 背景颜色

`\fcolorbox{}{}`可用于： 第一个大括号指定`{`颜色`}`，第二个大括号可以包含`{`文本`}`。

```MFM
😺\(\fcolorbox{yellow}{Hello}\)😺你好
```

### 带框背景颜色

`\fcolorbox{}{}`可用于： 第一个大括号指定`{`颜色`}`，第二个大括号可以包含`{`文本`}`。

```MFM
😺\(\fcolorbox{red}{yellow}{Hello}\)😺你好
```

## 其他

### 箱

你可以用`\boxed{`和`}`制作一个盒子。

# 相关资料链接

1. [按字母顺序排序的 TeX 函数列表。](https://katex.org/docs/support_table.html)
2. [按逻辑组排序的 TeX 函数列表](https://katex.org/docs/supported.html)
3. [HTML标准色名表](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)
4. [原文wiki.misskey.io/翻译时间20231221](https://wiki.misskey.io/ja/function/mfm)
