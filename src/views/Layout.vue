<template>
  <div class="container">
    <!-- 顶部 -->
    <AppTopNav></AppTopNav>
    <!-- 头部 -->
    <AppHader></AppHader>
    <!-- 吸顶 -->
    <AppHeaderSticky/>
    <!-- 内容容器 -->
    <div class="main">
      <router-view/>
    </div>
    <!-- 底部 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppTopNav from '@/components/app-topnav.vue'
import AppHader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: 'Layout',
  components: {
    AppTopNav,
    AppHader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    // 获取分类数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
.main{
  min-height: 600px;
}
</style>
