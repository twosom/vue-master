<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username">
    </div>

    <div>
      <label for="password">password:</label>
      <input type="text" id="password" v-model="password">
    </div>

    <div>
      <label for="nickname">nickname:</label>
      <input type="text" id="nickname" v-model="nickname">
    </div>

    <button :disabled="!isValidUsername || !this.password || !this.nickname" type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import {registerUser} from "@/api";
import {validateEmail} from "@/utils/validation";

export default {
  data() {
    return {
      //form Values
      username: String(),
      password: String(),
      nickname: String(),

      // Log
      logMessage: String(),
    }
  },
  computed: {
    isValidUsername() {
      return validateEmail(this.username);
    }
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const {data} = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  }
}
</script>

<style scoped>

</style>