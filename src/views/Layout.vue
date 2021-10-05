<template>
  <div class="container">
    <!-- 顶部 -->
    <AppTopNav></AppTopNav>
    <!-- 头部 -->
    <AppHader></AppHader>
    <!-- 内容容器 -->
    <div class="main">
      <router-view/>
    </div>
    <!-- 底部 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppTopNav from '@/components/app-topnav.vue'
import AppHader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'Layout',
  components: {
    AppTopNav,
    AppHader,
    AppFooter
  },
  setup () {
  }
}
</script>

<style lang="less" scoped>
.main{
  min-height: 600px;
}
</style>
