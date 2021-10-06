// 扩展vue原有功能： 全局组件， 自定义指令， 挂载原型方法

import XtxSkeleton from './xtx-skeleton.vue'

export default {
  install (app) {
    // 在app上进行扩展，app 提供 component  directive
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}
