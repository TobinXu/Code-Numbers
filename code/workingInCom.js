// 报错：Could not install from "@\api\modules\product\goods-spec\goods-spec" as it does not contain a package.json file.

// 原因： the issue comes up because npm has not downloaded/written the package to disk before it goes to get the package.json from local file module. It then looks for the package.json from the disk when it is not yet there. npm uses the package pacote to grab the package.json https://github.com/zkat/pacote/blob/9ddc52e5120459871d8e50b73c77b1479b39bc2e/lib/fetchers/directory.js#L22 which fails because the module has not been written to disk and thus the module is not where it is looking for it. 

// 处理：
// 1、npm rm -r package-lock.json
// 2、npm install yarn  用yarn下载
// 3、yarn add @/api/modules/product/goods-spec/goods-spec

// yarn的包管理
//  https://classic.yarnpkg.com/zh-Hans/docs/cli/add/#toc-yarn-add-optional-o

// 你可以用以下方法指定版本号：

// yarn add package-name 会安装 latest 最新版本。
// yarn add package-name@1.2.3 会从 registry 里安装这个包的指定版本。
// yarn add package-name@tag 会安装某个 “tag” 标识的版本（比如 beta、next 或者 latest）。
// 你也可以指定不同路径的包：

// yarn add package-name 从 npm registry 里安装包，除非你在 package.json 指定了其它 registry。
// yarn add file:/path/to/local/folder 从本地文件系统里安装一个包，可以用这种方式来测试还未发布的包。
// yarn add file:/path/to/local/tarball.tgz 安装一个 gzipped 压缩包，此格式可以用于在发布之前分享你的包。
// yarn add <git remote url> 从远程 git repo 里安装一个包。
// yarn add <git remote url>#<branch/commit/tag> 从一个远程 git 仓库指定的 git 分支、git 提交记录或 git 标签安装一个包。
// yarn add https://my-project.org/package.tgz 用一个远程 gzipped 压缩包来安装。

//20020628任务
// 1.左侧更多搜索
// 2.附表格的高度自适应（底部固定
// 3.父子组件之间的通信怎么实现

