import { createStore } from 'vuex'
import vuexPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  // 配置插件
  plugins: [
    vuexPersistedstate({
      // 本地存储的名字
      key: 'heima-erbbit-vue3',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
