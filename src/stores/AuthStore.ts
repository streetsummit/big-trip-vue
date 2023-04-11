import router from '@/router';
import { localStorageKeys } from '@/utils/constants';
import { defineStore } from 'pinia';

type AuthKey = null | string;

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {
      nickname: localStorage.getItem(localStorageKeys.NICKNAME),
    } as { nickname?: string },
    authKey: localStorage.getItem(localStorageKeys.AUTH_KEY) as AuthKey,
  }),

  getters: {
    isAuthenticated: state => Boolean(state.authKey),
  },

  actions: {
    login(nickname: string, authKey: string) {
      this.user = { nickname };
      this.authKey = authKey;
      localStorage.setItem(localStorageKeys.AUTH_KEY, authKey);
      localStorage.setItem(localStorageKeys.NICKNAME, nickname);
      router.push('/');
    },

    logout() {
      localStorage.removeItem(localStorageKeys.AUTH_KEY);
      localStorage.removeItem(localStorageKeys.NICKNAME);
      this.user = {};
      this.authKey = null;
      router.push('/login');
    },
  },
});
