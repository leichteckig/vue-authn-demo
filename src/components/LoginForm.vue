<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
    <div class="login-form__user">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" class="hand-drawn" required>
    </div>
    <div class="login-form__password">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" class="hand-drawn" required>
    </div>
    <button type="submit" class="hand-drawn">Login</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
  
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.get(`https://${process.env.VUE_APP_PROJECTID}.mockapi.io/ams/api/users`, {
          params: {
            username: this.username,
            password: this.password
          }
        });
        console.log(response)

        if (response.data.length === 1) {
          console.log('User logged in successfully!', response.data[0]);
        } else {
          console.log('Invalid username or password.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
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