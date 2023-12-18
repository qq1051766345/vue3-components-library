import { computed, defineComponent, ref, toRefs } from "vue";
import { IInnerTreeNode, TreeProps, treeProps } from "./tree-types";
import { generateInnerTree } from "./utils";

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const innerData = ref(generateInnerTree(data.value));
    console.log(innerData.value);
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
        if (excludeNodes.includes(item)) break;
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
      console.log(result, 123);
      return result;
    };

    // 为了不丢失响应式，需要使用toRefs
    return () => {
      // const defaultSlot = slots.default ? slots.default() : "STree";
      return (
        <div class="s-tree">
          {expandedTree.value.map(treeNode => (
            <div
              class="s-tree-node"
              style={{
                paddingLeft: `${24 * (treeNode.level - 1)}px`,
                height: "25px",
                lineHeight: "25px",
                display: "flex",
                alignItems: "center"
              }}
            >
              {/* 图标 */}
              {/* 判断当前节点是否为叶子结点 */}
              {treeNode.isLeaf ? (
                <span style={{ display: "inline-block", width: "25px" }}></span>
              ) : (
                <svg
                  onClick={() => toggleExpand(treeNode)}
                  style={{
                    width: "25px",
                    height: "25px",
                    transform: treeNode.expanded ? "rotate(90deg)" : "",
                    display: "inline-block"
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                >
                  <path fill="currentColor" d="M6 11V4l4.5 3.5L6 11Z" />
                </svg>
              )}
              {/* 标签 */}
              {treeNode.label}
            </div>
          ))}
        </div>
      );
    };
  }
});
