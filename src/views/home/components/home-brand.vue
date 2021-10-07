<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" :class="{disabled:index==0}" href="javascript:;" class="iconfont icon-iconangle-left"></a>
      <a @click="toggle(1)" :class="{disabled:index==1}" href="javascript:;" class="iconfont icon-iconangle-right"></a>
    </template>
    <div class="box" ref="box" v-if="brand.length">
      <ul class="list" :style="{transform:`translateX(${-index*1240}px)`}">
        <li v-for="item in brand" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
          </RouterLink>
        </li>
      </ul>
    </div>
    <HomeSkeleton v-else/>
  </HomePanel>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findBrand } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
export default {
  name: 'HomeBrand',
  components: { HomePanel, HomeSkeleton },
  setup () {
    // 获取数据
    const brand = ref([])
    findBrand(10).then((data) => {
      brand.value = data.result
    })

    // 切换
    const index = ref(0)
    const toggle = (step) => {
      const newVal = index.value + step
      if (newVal <= -1 || newVal > 1) {
        return
      }
      index.value = newVal
    }
    return { brand, index, toggle }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 80px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
