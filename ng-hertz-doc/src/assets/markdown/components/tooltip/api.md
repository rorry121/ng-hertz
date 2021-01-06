
`[hz-tootip]`

| 属性 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `[hzTooltipTitle]` | `string` ｜ `TemplateRef<void>`| 显示内容| - |
| `[hzTooltipPlacement]` | `OverLayPlacement`| 方位 | `'top'` |
| `[hzTooltipVisible]` | `boolean`| 控制 tooltip 显示, 可双向绑定 | - |
| `[hzTooltipVisibleClass]` | `string`| 当 tooltip 显示时给宿主元素增加类名 | - |
| `[hzTooltipTrigger]` | `'hover'` ｜ `'click'` ｜ `'focus'` ｜ `null`| 触发方式 | 'hover' |
| `[hzTooltipType]` | `'default'` ｜`'info'`| 两种类型 | `'info'` |
| `[hzTooltipShowArrow]` | `boolean`| 当 `hzTooltipType` 为 info 时, 可控制是否显示小三角 | `true` |
| `[hzTooltipWidth]` | `string` | tooltip 固定宽度 | - |
| `[hzTooltipMaxWidth]` | `string` | tooltip 最大宽度 | - |
| `[hzTooltipTriggerOrigin]` | `ElementRef`| 自定义 tooltip 触发元素 | - |
| `[hzTooltipPositionOrigin]` | `ElementRef` | 自定义 tooltip 基于显示的元素 | - |
| `[hzTooltipEnterDelayTime]` | `number`| tooltip 显示延迟时间 | `150` |
| `[hzTooltipLeaveDelayTime]` | `number`| tooltip 消失延迟时间 | `100` |
| `[hzTooltipWithPositions]` | `ConnectionPositionPair[]`| 当 hzTooltipPlacement 所设置的定位无法显示完整时, 备用的定位显示策略 | `100` |
| `(hzTooltipVisibleChange)` | `EventEmitter<boolean>` | hzVisible 状态变化回调 | - |
