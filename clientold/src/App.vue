<template>
  <div id="app">
    
     <div id="nav" class="fixed-top bg-white">
       <!-- <router-link to="/" class="align-left">Job4U</router-link> -->
       <div class="text-left">
          <router-link to="/">Jobs4U</router-link> 
       </div>  
      <router-link to="/seeker/register">FOR JOB SEEKER</router-link> |
      <router-link to="/employer/register">FOR EMPLOYER</router-link> |
      <router-link to="/companies">COMPANY</router-link> |
      <router-link to="/contact">CONTACT</router-link> |
      <router-link to="/login">LOGIN</router-link>
    </div> 
    <router-view/> 
  </div>
</template>

<script>
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css'
export default {
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
