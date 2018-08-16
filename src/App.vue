<template>
  <div id="app">
    <Navbar></Navbar>
    <AppPosts></AppPosts>
  </div>
</template>

<script>
import AppPosts from "./components/AppPosts";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    AppPosts,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
