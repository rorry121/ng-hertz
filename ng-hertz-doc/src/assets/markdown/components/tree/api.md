#### API

##### 树组件属性

| 属性 | 类型 | 取值 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| `[hzData]` | `TreeNodeOptions[]` | - | 树的原始数据，需要根据 HzTreeNodeOptions 接口定义传入  |`[]`|
| `[hzNodeIndent]` | `number` | - | 树的缩进值  |`16`|
| `[hzNodeStartLevel]` | `number` | - | 树的起始的 level，可以控制起始缩进  |`0`|
| `[hzVirtualHeight]` | `string`| - | 虚拟滚动的高度，有值则为虚拟滚动  | - |
| `[hzVirtualItemSize]` | `string`| - | 虚拟滚动每个节点高度，与 cdk 中 `cdk-virtual-scroll-viewport` 组件的 itemSize 一致   | `24` |
| `[hzVirtualMinBufferPx]` | `string`| - | 与 cdk 中 `cdk-virtual-scroll-viewport` 组件的 minBufferPx 一致   | `24` |
| `[hzVirtualMaxBufferPx]` | `string`| - | 与 cdk 中 `cdk-virtual-scroll-viewport` 组件的 maxBufferPx 一致   | `480` |
| `[hzCanActivateNode]` | `boolean` | - | 是否可以选中 active 节点 | `true` |
| `[hzNoHoverEffect]` | `boolean` | - | 若为 `true`，鼠标经过节点无 hover 效果 | `false` |
| `[hzSelectMode]` | `boolean` | - | 是否为多选节点模式| `true` |
| `[hzSearchModelChange]` | `Observable<string>`| - | 搜索功能提供 Observable 对象| - |
| `[hzShowNodeToggle]` | `boolean` | - | 是否展示节点开关 | `true` |
| `[hzNodeToggle]` | `TemplateRef<{ $implicit: HzTreeNode }>` | - | 自定义节点开关 | - |
| `[hzCheckable]` | `boolean` | - | 是否支持 checkbox | `false` |
| `[hzEnableWholeNodeToggle]` | `boolean` | - | 是否点击整个节点控制节点的展开 | `false` |
| `[hzBeforeActive]` | `(node: HzTreeNode) => Observable<boolean>` | - | 节点被 active 前的逻辑判断，返回 true 则可被 active | - |
| `[hzBeforeSelect]` | `(node: HzTreeNode) => Observable<boolean>` | - | 节点被选中前的逻辑判断，返回 true 则可被选中 | - |
| `[hzBeforeExpand]` | `(node: HzTreeNode) => Observable<boolean>` | - | 节点展开前的逻辑判断，返回 true 则可展开，可用来异步加载数据 | - |
| `[hzNodeTemplate]` | `TemplateRef<{ $implicit: HzTreeNode }>` | - | 自定义节点内容 | - |
| `[hzNodeExtraTemplate]` | `TemplateRef<{ $implicit: HzTreeNode }>` | - | 节点下额外的内容 | - |
| `[hzShowTreeBranch]` | `boolean` | - | 是否显示连接线，需 `hzShowNodeToggle` 为 true | `false` |
| `[hzLeafNodeBranchY]` | `boolean` | - | 叶子节点支干距离顶部距离, 需 `hzShowTreeBranch` 为 true | `'50%'` |
| `[hzNodeExtraTemplate]` | `TemplateRef<{ $implicit: HzTreeNode }>` | - | 节点下额外的内容 | - |
| `(hzTreeNodeClick)` | `EventEmitter<TreeNode>` | - | 点击树节点回调事件 | - |
| `(hzActiveNodeChange)` | `EventEmitter<TreeNode>` | - |active 节点变化的事件 | - |
| `(hzCheckboxChange)` | `EventEmitter<{checkedList: HzTreeNode[], node: HzTreeNode, checked: boolean}>` | - | 每次节点 checkbox 选中 emit 所有选中节点的list，当前变化的节点 node 以及本次 checked 状态 | - |
| `(hzSelectChange)` | `EventEmitter<{selectedList: HzTreeNode[], node: HzTreeNode, selected: boolean}>` | - | 每次节点 selected 属性变化时 emit 所有 selected 节点的list，当前变化的节点 node 以及本次 selected 状态 | - |
| `(hzDataHandledComplete)` | `EventEmitter<void>` | - | tree 初始化完成，hzData 数据处理完毕事件，通过此事件在每次 hzData 变化后，可以拿到正确的数据 | - |

##### 树实例方法

| 方法 | 描述 | 返回类型 |
| --- | --- | --- |
| `getCheckedList` | 获取当前树 checked  为 true 的节点 | `TreeNode[]` |
| `getCheckedList` | 获取当前树 selected  为 true 的节点 | `TreeNode[]` |
| `getActiveNode` | 获取当前 active 节点 | `TreeNode` |
| `detectChanges` | 手动触发刷新树 | `void` |

##### HzTreeNodeOptions

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 树节点标题 | `string` | - |
| `key` | 树节点 key, 不能重复 | `string` | - |
| `isLeaf` | 是否为叶子节点 | `boolean` | `false` |
| `checked` | 设置节点 checkbox 状态 | `boolean` | `false` |
| `selected` | 设置节点选中状态（适用于多选模式） | `boolean` | `false` |
| `disabled` | 设置节点 disabled 状态 | `boolean` | `false` |
| `disableCheckbox` | 设置节点 checkbox 的 disabled 状态 | `boolean` | `false` |
| `loading` | 节点是否在加载中 | `boolean` | `false` |
| `expanded` | 设置节点展开状态 | `boolean` | `false` |
| `parentKey` | 父节点 key | `string` | - |
| `children` | 子节点 | `HzTreeNodeOptions[]` | `undefined` |
