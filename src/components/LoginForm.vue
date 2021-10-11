<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input type="text" id="username" v-model="username">
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              이메일 주소를 입력해주세요.
            </span>
          </p>
        </div>

        <div>
          <label for="password">pw:</label>
          <input type="text" id="password" v-model="password">
        </div>
        <button
            :disabled="!isUsernameValid || !password"
            type="submit"
            class="btn"
        >로그인
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>

import {loginUser} from "@/api";
import {validateEmail} from "@/utils/validation";
import {mapMutations} from "vuex";


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
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    }
  },
  methods: {
    ...mapMutations([
      'setUsername'
    ]),
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password
        }
        const {data} = await loginUser(userData);
        // TODO 메인 페이지로 이동
        const username = data.user.username;
        console.log(username);
        this.setUsername(username);
        this.$router.push('/main');
        // this.logMessage = `${data.user.username} 님 환영합니다.`;

      } catch (error) {
        // 에러 핸들링
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  },
}
</script>

<style scoped>
.btn {
  color: white;
}
</style>