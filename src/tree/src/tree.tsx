import { defineComponent, toRefs } from "vue";
import { TreeProps, treeProps } from "./tree-types";
import useTree from "./hooks/useTree";
import "../../index.scss";

export default defineComponent({
  name: "STree",
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props);
    const { expandedTree, toggleExpand, getChildren } = useTree(data);

    const NODE_HEIGHT = 25;
    const NODE_INDENT = 25;

    // 为了不丢失响应式，需要使用toRefs
    return () => {
      // const defaultSlot = slots.default ? slots.default() : "STree";
      return (
        <div class="s-tree">
          {expandedTree.value.map(treeNode => (
            <div
              class="s-tree-node hover:bg-slate-100 relative"
              style={{
                paddingLeft: `${NODE_HEIGHT * (treeNode.level - 1)}px`,
                height: "25px",
                lineHeight: "25px",
                display: "flex",
                alignItems: "center"
              }}
            >
              {/* 连接线 */}
              {!treeNode.isLeaf && treeNode.expanded && (
                <span
                  class="absolute w-px bg-slate-300 z-50"
                  style={{
                    height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
                    left: `${NODE_INDENT * (treeNode.level - 1) + 12}px`,
                    top: `${NODE_HEIGHT}px`
                  }}
                ></span>
              )}

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
