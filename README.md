## vuepress Demo

新建一個資料夾，並快速初始化
mkdir new_project

npm init -y
全域安裝VuePress
npm install -g vuepress
創建一個文件資料夾，用來存放md文章
// vuepress官方預設的命名是採用docs，為了避免踩到額外的坑，統一先使用官方文件的格式

mkdir docs
配置package.json，添加下述兩行
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
創建一個md文件，用來支援首頁呈現，並用於預覽
echo '# Hello VuePress' > docs/README.md

啟動本地server端進行預覽
yarn run docs:dev 
or
npm run docs:dev
先進行一次打包構建，讓專案資料夾呈現vuepress官方預設的結構
yarn run docs:build
or
npm run docs:build
