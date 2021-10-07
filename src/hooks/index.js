// 提供复用逻辑的函数

import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 *    target -- DOM对象
 *     apiFn -- API函数
*/
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  // 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    // isIntersecting 是否进入可视区域，true是进入 false是移出
    // observerElement 被观察的dom
    ([{ isIntersecting }], observerElement) => {
      // 在此处可根据isIntersecting来判断，然后做业务
      if (isIntersecting) {
        stop()
        // 调用API
        apiFn.then((data) => {
          result.value = data.result
        })
      }
    }
  )
  return result
}
