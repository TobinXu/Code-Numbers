报错：Could not install from "@\api\modules\product\goods-spec\goods-spec" as it does not contain a package.json file.

原因： the issue comes up because npm has not downloaded/written the package to disk before it goes to get the package.json from local file module. It then looks for the package.json from the disk when it is not yet there. npm uses the package pacote to grab the package.json https://github.com/zkat/pacote/blob/9ddc52e5120459871d8e50b73c77b1479b39bc2e/lib/fetchers/directory.js#L22 which fails because the module has not been written to disk and thus the module is not where it is looking for it. 

处理：
1、npm rm -r package-lock.json
2、npm install yarn  用yarn下载
3、yarn add @/api/modules/product/goods-spec/goods-spec
