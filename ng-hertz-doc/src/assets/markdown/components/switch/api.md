
`<hz-switch>`

| 属性 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `[ngModel]` | `HzSwitchValue`| 可双向绑定，支持 `boolean`、`string`、`number` 类型| - |
| `[hzDisabled]` | `boolean`|是否禁用 switch| `false` |
| `[hzCheckedValue]` | `boolean`|开关开启时，给 ngModel 设定的值| `true` |
| `[hzUnCheckedValue]` | `boolean`|开关关闭时，给 ngModel 设定的值| `false` |
| `(ngModelChange)` | `EventEmitter<HzSwitchValue>` | ngModel 状态变化回调 | - |
