import * as inquirer from "inquirer";
import { red } from "kolorist";
import createComponent from "../shared/create-components";
const CREATE_TYPE = ["component", "lib-entry"];

const DOCS_CATEGORIES = [
  "通用",
  "导航",
  "反馈",
  "数据录入",
  "数据展示",
  "布局"
];

export async function onCreate(args = { type: "" }) {
  console.log(args);
  // 注册回调函数
  // 判断一下用户是否输入type
  let { type } = args;
  if (!type) {
    // 未输入则提示用户输入
    const result = await inquirer.prompt([
      {
        // 获取属性名称
        name: "type",
        // 交互方式
        type: "list",
        // 提示信息
        message: "（必填项）请选择创建类型",
        choices: CREATE_TYPE,
        // 默认选项
        default: 0
      }
    ]);
    type = result.type;
  }

  // 用户输入了信息但是输错了，要求用户重新选择
  if (!CREATE_TYPE.includes(type)) {
    console.log(
      red(`当前类型仅支${CREATE_TYPE.join(",")},您输入的是${type},请重新选择`)
    );
    return onCreate();
  }

  // 用户输入了正确的type，开始创建
  try {
    switch (type) {
      case "component":
        // 如果是组件，还得收集组件信息
        const info = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "（必填项）请输入组件名称，将用作文档列表显示",
            validate: (value: string) => {
              if (value.trim() === "") {
                return "组件名称不能为空";
              }
              return true;
            }
          },
          {
            name: "category",
            type: "list",
            message: "（必填项）请选择组件的分类，将用作文档列表的分类中",
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ]);
        createComponent(info);
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
}
