<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCatrgory/>
      <!-- 轮播图 -->
      <HomeBanner></HomeBanner>
    </div>
  </div>
  <!-- 新鲜好物 -->
  <HomeNew/>
  <!-- 人气推荐 -->
  <HomeHot/>
  <!-- 热门品牌 -->
  <HomeBrand/>
  <!-- 商品区块 -->
  <HomeProduct/>
  <!-- 最新专题 -->
  <HomeSpecial/>
</template>

<script>
import HomeCatrgory from './components/hone-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'home',
  components: {
    HomeCatrgory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  },
  setup () {
  }
}
</script>

<style lang="less" scoped>
.container{
  .home-entry{
    position: relative;
    left: 50%;
    margin-left: -620px;
  }
}
</style>
