<template>
  <section class="login">
    <h2 v-if="isAuthenticated">You are already logged in</h2>

    <form
      v-else
      class="login-form"
    >
      <h2 class="login-form__title">Login</h2>
      <label class="login-form__item">
        <span class="login-form__label">Nickname</span>
        <input
          class="login-form__input"
          type="text"
          placeholder="nickname"
          name="nickname"
          v-model="nickname"
        />
      </label>
      <label class="login-form__item">
        <span class="login-form__label">Password</span>
        <input
          class="login-form__input"
          type="password"
          name="password"
          v-model="password"
        />
      </label>
      <button
        class="login-form__submit"
        type="submit"
        @click.prevent="login(nickname, password)"
      >
        Login
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const nickname = ref('');
const password = ref('');

const { login } = useAuthStore();
const { isAuthenticated } = storeToRefs(useAuthStore());
</script>

<style>
.login-form {
  max-width: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 11px 20px rgba(0, 0, 0, 0.043);
}

.login-form__title {
  margin-bottom: 20px;
}

.login-form__item {
  margin-bottom: 20px;
  padding: 5px 2px;
  display: flex;
  flex-direction: column;
}

.login-form__item:last-child {
  margin-bottom: 0;
}

.login-form__label {
  margin-bottom: 10px;
}

.login-form__input {
  border-bottom: 1px solid #0d8ae4;
}

.login-form__submit {
  display: block;
  padding: 20px 30px;
  font-size: 17px;
  line-height: 21px;
  background-color: #f2f2f2;
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #0d8ae4;
}
</style>
