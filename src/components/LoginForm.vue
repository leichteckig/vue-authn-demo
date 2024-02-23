<template>
  <div class="login-form">
    <img src="../assets/whoarevue.png" alt="Who are Vue?"/>
    <h2>Login</h2>
    <form @submit.prevent="registerUser">
      <div class="login-form__user">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" class="hand-drawn" required>
      </div>
      <div class="login-form__password">
        <label for="password">  Password:</label>
        <input type="password" id="password" v-model="password" class="hand-drawn" required>
      </div>
      <button type="submit" class="hand-drawn">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      // Your registration logic here
    }
  }
};
</script>
<style scoped>
.login-form {
  button {
    margin: 10px;
    color: #42b883;
    background-color: #ffffff;
    height: 30px;
  }

  .login-form__user,
  .login-form__password {
    margin: 5px;

    input {
      border: 2px solid #42b883;
    }

    label {
      margin-right: 10px;
    }
  }

    /* hand-drawn effect */
  .hand-drawn {
    border: 2px solid #42b883;

    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    
  }
}
</style>