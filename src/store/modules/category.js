// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map((item) => ({
        name: item
      }))
    }
  },
  // 修改分类函数
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    // 定义show 和 hide 函数，控制二级分类显示隐藏
    show (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const { result } = await findAllCategory()
      // 给每个分类加上控制二级分类显示隐藏的数据
      result.forEach(top => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', result)
    }
  }
}
