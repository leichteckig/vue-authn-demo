<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
    <div class="login-form__user">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" :class="getLoginResultClasses" required>
    </div>
    <div class="login-form__password">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" :class="getLoginResultClasses" required>
    </div>
    <button type="submit" :class="getLoginResultClasses">Login</button>
    </form>
  </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    name: 'LoginView',

    data() {
      return {
        username: '',
        password: '',
        loginFailed: false
      };
    },

    computed: {
      getLoginResultClasses(){
        return this.loginFailed? 'hand-drawn login--failed' : 'hand-drawn login--neutral';
      }

    },
    methods: {
      async loginUser() {
        console.log('user', this.username)
        const data = {
          username: this.username,
          password: this.password
        }
        try {
          const response = await axios.post('http://localhost:3000/login', {
              headers: {
                  'Content-Type': 'application/json'
              },
              data
          });
          if (response.data.token) {
            console.log(response)

            // Store the token in local storage
            localStorage.setItem('token', response.data.token);
            this.loginFailed = false;
            
            // Redirect to dashboard
            this.$router.push('/dashboard');
          } else {
            console.log('Invalid username or password.');
          }
        } catch (error) {
          this.loginFailed = true;
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
    
      login--neutral,
      input {
        border: 2px solid #42b883;
      }

      .login--failed {
        border: 2px solid red;
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