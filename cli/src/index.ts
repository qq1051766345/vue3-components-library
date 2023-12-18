import { Command } from "commander";
import { onCreate } from "../command/create";
// 创建一个命令对象
const cmd = new Command();

// 注册一个命令、参数，以及用户传入之后的回调函数
// tsnd ./src/index.ts create  可以添加参数
cmd
  .command("create")
  .description("创建一个组件模板或配置文件")
  .option(
    // -t --type 为参数名，<type> 为参数值，这里的参数值是必填的
    "-t --type <type>",
    "创建的类型，可选值为：component、lib-entry"
  )
  .action(onCreate);

// 执行命令解析用户传入的参数
cmd.parse();
