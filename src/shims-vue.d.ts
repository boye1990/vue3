declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  import { DefineComponent } from 'vue' // 导入 DefineComponent 类型
  const component: DefineComponent<{}, {}, any> // 声明 component 为 DefineComponent类型
  export default component // 默认导出变量
}
