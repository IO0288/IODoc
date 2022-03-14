---
id: intro
title: 指南
sidebar_position: 1
sidebar_label: Easy
sidebar_class_name: green
tags: [标签, 开始使用]
---

# 指南

## 介绍

让我们在不到5分钟内发现**Docusaurus**。

## 开始

开始**creating a new site**。

或者立即用[**Docusaurus.new**](https://docusaurus.new).

### 你需要什么

-[Node.js](https://nodejs.org/en/download/)第14版或更高版本：

-安装节点时。js，建议您选中所有与依赖项相关的复选框。

## 生成一个新站点

使用**经典模板**生成新的Docusaurus站点。

运行命令后，经典模板将自动添加到项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、Powershell、终端或代码编辑器的任何其他集成终端中键入此命令。

该命令还将安装运行Docusaurus所需的所有依赖项。

## 启动你的网站

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令更改您正在使用的目录。为了使用新创建的Docusaurus站点，您需要在那里导航终端。

`npm run start` 命令在本地构建您的网站，并通过开发服务器提供服务，供您随时查看http://localhost:3000/.

打开 `docs/intro.md`（此页面）并编辑一些行：网站**自动重新加载**并显示您的更改。