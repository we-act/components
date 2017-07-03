## 目录说明

 - src/basic            基础组件
 - src/hoc              高阶组件
 - src/svgicons         React 图标组件
 - svgicon-sources      图标 svg 源文件

## 代码编写规范

 - JS 请使用 es6 语法
 - CSS 需要使用 sass 语法，CSS 后缀为 `.scss`，以 CSS modules 形式 import 到 JS 中使用
 - 组件样式 scss 和图片与组件 React 同一个目录，可建立子目录如 /ColorPicker 下放 JS scss image


## PC 端组件库列表


### React 基础组件库：  

#### layout 布局

 - Dialog 弹出层

#### nav 导航

 - 流程步骤条
 - 面包屑
 - Tab 切换

#### form 表单控件

 - 输入框
 - 下拉菜单
 - 按钮
 - inline 编辑
 - 日历
 - 编辑器
 - 上传图片视频
 - radio(横向、竖向)
 - checkbox(横向、竖向)

#### tips 提示

 - 编辑消息提示
 - 全局提示
 - 导航提示
 - 导航开关提示
 - 按钮提示
 - Tips 悬浮提示
 - 反馈提示
 - New 提示



## 图标 React 组件

### 添加步骤

 - svgo 优化 svg 文件
 - svg 文件放到 components/svgicon-sources/ 目录下对应子目录，MP 的放到 components/svgicon-sources/mp 子目录下，文件名必须是小写和 `-` 符合，不可使用其他字符
 - 在终端到 components 路径下执行 `npm run svgicon:build` 生成所有图标的 React 组件，如 components/src/svgicons/mp/IconMpInfo.js，文件名是 Icon + 类名风格的子目录名 + 类名风格的文件名

### 使用方法

```
import IconMpQrcode from 'componentPath/svgicons/mp/IconMpQrcode'

ReactDOM.render(<IconMpQrcode color='#BDBEC0' size='22'/>)
```

