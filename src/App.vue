<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <container class="mt-4" />
    </transition>
  </div>
</template>

<script>
import Container from './components/container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style>
#app {
  text-align: center;
  background-color: #F5D8A9; 
}
html{
  background-color: #F5D8A9;
}

</style>
