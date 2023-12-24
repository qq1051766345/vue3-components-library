import { IInnerTreeNode, ITreeNode } from "./tree-types";

export function generateInnerTree(
  tree: ITreeNode[],
  level: number = 0, //表示当前节点所处的层级
  path: IInnerTreeNode[] = [] //递归过程的路径
): IInnerTreeNode[] {
  level += 1;
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode;
    o.level = level;

    // 记录调用栈
    if (path.length > 0 && path[path.length - 1].level >= level) {
      // 子到父出的这个过程
      path.pop();
    }

    // 记录当前节点
    path.push(o);

    // 获取parentNode
    const parentNode = path[path.length - 2];
    if (parentNode) {
      // 给当前节点增加parentId
      o.parentId = parentNode.id;
    }

    // 判断cur是否存在children
    if (o.children) {
      // 首先递归，然后删除children
      const children = generateInnerTree(o.children, level, path);
      delete o.children;
      // 递归调用
      return prev.concat(o, children);
    } else {
      // 如果不存在children，设置isLeaf为true
      // 叶子结点
      o.isLeaf = true;
      return prev.concat(o);
    }
  }, [] as IInnerTreeNode[]);
}
