<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
<<<<<<< HEAD
=======

>>>>>>> afe0d63a2b9bdf2ceb2aef708d9049962138c581
export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  height: 100vh;
<<<<<<< HEAD
}

button.transparent {
  margin: 5px;
  background: transparent;
  border: none;
}

input.transparent {
  width: 100%;
  border: none;
}

input.transparent:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
=======
>>>>>>> afe0d63a2b9bdf2ceb2aef708d9049962138c581
}

button.transparent {
  margin: 5px;
  background: transparent;
  border: none;
}

input.transparent {
  width: 100%;
  border: none;
}

input.transparent:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>