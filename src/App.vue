<template>
  <div id="app">
    <!-- <blog-header></blog-header> -->
    <router-view/>
    <!-- <blog-footer></blog-footer> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import BlogHeader from "@/components/layout/BlogHeader.vue";
// import BlogFooter from "@/components/layout/BlogFooter.vue";

@Component({
  // components: {
  //   BlogHeader,
  //   BlogFooter
  // }
})

export default class App extends Vue {

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
