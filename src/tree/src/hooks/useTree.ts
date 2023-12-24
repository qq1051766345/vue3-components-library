import { IInnerTreeNode, ITreeNode } from "../tree-types";
import { generateInnerTree } from "../utils";
import { ref, computed, Ref, unref } from "vue";

export default function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)));

  const toggleExpand = (treeNode: IInnerTreeNode) => {
    // 在原始数据中找到对应的节点
    const node = innerData.value.find(item => item.id === treeNode.id);
    if (node) {
      node.expanded = !node.expanded;
    }
  };

  const expandedTree = computed(() => {
    const excludeNodes: IInnerTreeNode[] = [];
    const result: IInnerTreeNode[] = [];

    // 循环列表，找出哪些expanded为false的节点
    for (const item of innerData.value) {
      // 如果节点在排除列表中，那么就跳出这次循环
      if (excludeNodes.includes(item)) continue;
      // 当前节点处于节点关闭状态，它的子节点应该被排除
      if (!item.expanded) {
        excludeNodes.push(...getChildren(item));
      }
      result.push(item);
    }
    return result;
  });

  const getChildren = (treeNode: IInnerTreeNode): IInnerTreeNode[] => {
    const result = [];
    const startIndex = innerData.value.findIndex(
      item => item.id === treeNode.id
    );

    for (
      let i = startIndex + 1;
      i < innerData.value.length && treeNode.level < innerData.value[i].level;
      i++
    ) {
      result.push(innerData.value[i]);
    }
    return result;
  };

  return {
    innerData,
    expandedTree,
    toggleExpand,
    getChildren
  };
}
