<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
        <span v-if="this.isLogin">by {{ this.getUsername }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="this.isLogin">
        <a href="javascript:" @click="logoutUser" class="logout-button">Logout</a>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'isLogin',
      'getUsername'
    ])
  },
  methods: {
    ...mapMutations([
      'clearUsername'
    ]),
    logoutUser() {
      this.clearUsername();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.username {
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}

a {
  color: #dedede;
  font-size: 18px;
}

a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}

.logout-button {
  font-size: 14px;
}

a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>