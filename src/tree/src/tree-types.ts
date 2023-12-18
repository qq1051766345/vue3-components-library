import { ExtractPropTypes, PropType } from "vue";
// 定义props属性对象
export const treeProps = {
  data: {
    type: Object as PropType<Array<IInnerTreeNode>>,
    required: true
  }
} as const; //不可以动态的设置其他属性

export type TreeProps = ExtractPropTypes<typeof treeProps>;

export interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean;
  checked?: boolean;
  expanded?: boolean;

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string; //父节点id
  /* 节点层级 */
  level: number; //
  isLeaf?: boolean; //是否为叶节
}
