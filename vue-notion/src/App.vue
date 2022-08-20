<template>
  <div id="app">
    <!-- template部でコンポーネントをHTMLタグとして記述 -->
    <NavigationBar />
    <MainPage />
  </div>
</template>

<script>
//script部でコンポーネントの読み込み
import NavigationBar from '@/components/NavigationBar.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'App',
  //script部で使用するコンポーネントの宣言
  components: {
    NavigationBar,
    MainPage
  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>