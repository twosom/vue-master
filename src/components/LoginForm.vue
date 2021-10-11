<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username">
    </div>

    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="password">
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>

import {loginUser} from "@/api";

export default {
  data() {
    return {
      // Form Values
      username: String(),
      password: String(),
      // Log
      logMessage: String()
    }
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      }
      const {data} = await loginUser(userData);
      this.logMessage = `${data.user.username} 님 환영합니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  },
}
</script>

<style scoped>

</style>