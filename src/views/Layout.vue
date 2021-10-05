<template>
  <div class="container">
    <!-- 顶部 -->
    <nav>top</nav>
    <!-- 头部 -->
    <header>header</header>
    <!-- 内容容器 -->
    <div class="main">
      <router-view/>
    </div>
    <!-- 底部 -->
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  setup () {
  }
}
</script>

<style lang="less" scoped>

</style>
