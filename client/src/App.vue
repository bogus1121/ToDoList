<template>
  <div id="app">
    <v-app>
      <the-header></the-header>

      <v-main>
        <v-container fluid class="pt-16">
          <router-view></router-view>
        </v-container>
      </v-main>

      <the-footer></the-footer>
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/UI/TheHeader.vue'
import TheFooter from '@/components/UI/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f0e1;
  /* margin-top: 60px; */

  /* colors: #1e3d59, #f5f0e1, #ff6e40, #ffc13b */
}
</style>
