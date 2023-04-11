import router from '@/router';
import { localStorageKeys } from '@/utils/constants';
import { defineStore } from 'pinia';

interface User {
  nickname: string;
  password: string;
}

type AuthKey = null | string;

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {} as User,
    authKey: localStorage.getItem(localStorageKeys.AUTH_KEY) as AuthKey,
  }),

  getters: {
    isAuthenticated: state => Boolean(state.authKey),
  },

  actions: {
    login(nickname: string, password: string) {
      this.user = { nickname, password };
      this.authKey = `${nickname}${password}`;
      localStorage.setItem(localStorageKeys.AUTH_KEY, this.authKey);
      router.push('/');
    },

    logout() {
      localStorage.removeItem(localStorageKeys.AUTH_KEY);
      this.user = { nickname: '', password: '' };
      this.authKey = null;
      console.log(this.authKey);
      router.push('/login');
    },
  },
});
