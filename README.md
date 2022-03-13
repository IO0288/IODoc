# README

> 一个用 [Docusaurus 2](https://docusaurus.io/) 静态网站框架源码仓库。
>
> `master`分支存放源代码，`gh_pages`分支存放构建完后的静态HTML等静态文件
>
> 使用`Docusaurus 2`作为框架，GitHub的`Actions`实现git推送后自动化部署到`Pages`
>
> > [点我访问](https://io0288.github.io/IODocs/)
>
> 以下内容由框架生成

## Website/静态网站网站

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

这个网站是用 [Docusaurus 2](https://docusaurus.io/) 建立的，一款现代静态网站生成器。

### Installation/安装

```sh
$ yarn
```

### Local Development/本地运行

```sh
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都是实时反映的，无需重新启动服务器。

### Build/构建

```sh
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

此命令将静态内容生成到“build”目录中，并可以使用任何静态内容托管服务提供服务。

### Deployment/部署

Using SSH:

```sh
$ USE_SSH=true yarn deploy
```

Not using SSH:

```sh
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to
the `gh-pages` branch.

如果您使用GitHub页面进行托管，则此命令是一种方便的方法，可以构建网站并推送到“gh pages”分支。