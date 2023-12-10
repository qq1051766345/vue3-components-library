// 打包脚本
// 引入vite导出的build方法,用它来创建
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, build } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fsExtra from "fs-extra";
import fs from "fs";
//不用查了，我给你查到了
import { fileURLToPath } from "url";
//这个是干嘛的呢，其实你把代码cope一下，把这块注释掉,哎(我这个ai是二声不是一声，哎对就是你想的那味)，把下面的import.meta.url 一定义在把dirname一输出。 哎，你就知道报什么错了。
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// 入口文件设置
const entryFile = path.resolve(__dirname, "./entry.ts");
// 组件目录
const componentsDir = path.resolve(__dirname, "../src");
// 输出目录设置
const outputDir = path.resolve(__dirname, "../build");

// rollup配置
const rollupOptions = {
  // 外置
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
};

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
});

// 生成package.json
const createPackageJson = name => {
  // 预设
  const fileStr = `{
      "name": "${name ? name : "dh-ui"}",
      "version": "0.0.0",
      "main": "${name ? "index.umd.cjs" : "dh-ui.umd.cjs"}",
      "module": "${name ? "index.js" : "dh-ui.js"}",
      "author": "denghao",
      "description":"邓浩的组件库练习项目"
    }
  `;

  if (name) {
    // 单个组件，输出对应的package.json
    // 生成
    fsExtra.outputFileSync(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      "utf-8"
    );
  } else {
    // 生成全量打包
    fsExtra.outputFileSync(
      path.resolve(outputDir, "package.json"),
      fileStr,
      "utf-8"
    );
  }
};

// 执行创建
// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: "dh-ui",
          fileName: "dh-ui",
          formats: ["es", "umd"]
        },
        outDir: outputDir
      }
    })
  );
  // 生成package.json
  createPackageJson();
};

// 单个打包
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"]
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  );
  // 生成package.json
  createPackageJson(name);
  console.log(`${name}打包完成----------`);
};

const buildLib = async () => {
  await buildAll();

  // 按需打包
  const componentsList = fs.readdirSync(componentsDir).filter(name => {
    // 只要目录不要文件，且里面包含index.ts
    return (
      fs.statSync(path.resolve(componentsDir, name)).isDirectory() &&
      fs.existsSync(path.resolve(componentsDir, name, "index.ts"))
    );
  });

  componentsList.forEach(name => {
    buildSingle(name);
  });
};

buildLib();
