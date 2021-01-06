
`<hz-progress>`

| 属性 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `[hzPercent]` | `number` | 进度条百分比 | `0` |
| `[hzStatus]` | `'info'` ｜ `'success'` ｜ `'error'` ｜ `'warning'` | 进度条状态、对应内置四种颜色 | `'info'` |
| `[hzStrokeWidth]` | `number` | 长条：进度条带的宽度（px），环形：进度条带占整体百分比 | `5` |
| `[hzStrokeColor]` | `string`| 进度填充区域颜色 | - |
| `[hzStrokeOpacity]` | `number` | 进度填充区域透明度 | `false` |
| `[hzTrailColor]` | `string`| 整个轨迹的背景颜色 | `false` |
| `[hzTrailOpacity]` | `number` | 整个轨迹的透明度 | `false` |
| `[hzStrokeLinecap]` | `'round'` ｜ `'square'` ｜ `'butt'` | 进度条端点形状（环形特有） | `'round'` |
