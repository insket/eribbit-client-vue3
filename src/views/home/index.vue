<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="hone-entry">
      <!-- 左侧分类 -->
      <HomeCatrgory/>
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
import HomeCatrgory from './components/hone-category.vue'
export default {
  name: 'home',
  components: {
    HomeCatrgory
  },
  setup () {
  }
}
</script>

<style lang="less" scoped>
</style>
