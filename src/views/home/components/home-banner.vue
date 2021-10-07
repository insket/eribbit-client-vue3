<template>
  <div class="home-banner">
    <xtx-carousel :sliders='sliders' autoPlay/>
  </div>
</template>

<script>
import { ref } from 'vue'
import xtxCarousel from '@/components/library/xtx-carousel.vue'
import { findBanner } from '@/api/home'
export default {
  components: { xtxCarousel },
  name: 'homeBanner',
  setup () {
    const sliders = ref([]) // 轮播图数据
    findBanner().then((data) => {
      sliders.value = data.result
    })

    return {
      sliders
    }
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}
// 覆盖样式
.xtx-carousel {
  /deep/ .carousel-btn.prev {
    left: 270px;
  }
  /deep/ .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
