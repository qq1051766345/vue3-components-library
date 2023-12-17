import { ensureDirSync, writeFileSync } from "fs-extra";
import { resolve } from "path";
import { lightBlue, lightGreen } from "kolorist";
import genCoreTemplate from "../template/core";
import genTypesTemplate from "../template/types";
import genStyleTemplate from "../template/style";
import genTestTemplate from "../template/test";
import genIndexTemplate from "../template";

export interface ComponentMeta {
  name: string;
  category: string;
  title: string;
}

const WRITE_FILE_OPTIONS = "utf-8";

export default async function createComponent(meta: ComponentMeta) {
  const { name } = meta;
  // 先拼接一下组件目录
  const componentDir = resolve("../src", name);

  // 其他核心文件目录,组件源文件，类型，样式，测试
  const compSrcDir = resolve(componentDir, "src");
  const styleDir = resolve(componentDir, "style");
  const testDir = resolve(componentDir, "test");

  ensureDirSync(compSrcDir);
  ensureDirSync(styleDir);
  ensureDirSync(testDir);

  // 文件和内容创建
  const coreFilePath = resolve(compSrcDir, name) + ".tsx";
  const typesFilePath = resolve(compSrcDir, name + "-types") + ".ts";
  const styleFilePath = resolve(styleDir, name) + ".scss";
  const testFilePath = resolve(testDir, name) + ".test.ts";
  const indexFilePath = resolve(componentDir, "/index.ts");
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS);
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS);
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS);
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS);
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS);
  console.log(
    lightBlue(`
    ✅${name}组件创建成功
  `)
  );

  //创建成功以后的通知
  console.log(
    lightGreen(`✅创建组件成功，组件目录：${componentDir}`),
    "\n",
    lightGreen(`✅组件源文件目录：${compSrcDir}`),
    "\n",
    lightGreen(`✅组件样式目录：${styleDir}`),
    "\n",
    lightGreen(`✅组件测试目录：${testDir}`)
  );
}
