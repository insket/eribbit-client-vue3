// 首页相关接口
import request from '@/utils/request'

/**
 *    品牌个数
*/
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
