<template>
  <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  name: 'App',
  components: {
    LoginForm,
    RegistrationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  color: #42b883;

  a {
    text-decoration: none;
    margin: 5px;
  }

  a:visited {
    color: #42b883;
  }
}
</style>
