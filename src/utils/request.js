import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  //  获取用户信息对象
  const { profile } = store.state.user
  // 判断是否有token
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use((result) => {
  return result.data
}, (err) => {
  // 401 状态码进入该函数
  if (err.response && err.response.status === 401) {
    // 清空无效用户信息
    store.commit('user/setUser', {})
    // 跳转路由
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath) // currentRoute.fullPath 在vue3中变成了响应式
    router.push(`/login?redirectUrl=${fullPath}`)
  }
  return Promise.reject(err)
})

// 请求工具函函数
export default (url, method, submitData) => {
  // 发请求
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
