import { defineStore } from 'pinia';
import { router } from '@/router';
import { supabase } from '@/superbase.ts';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null,
      returnUrl: ''
    };
  },

  actions: {
    async onInit() {
      const { data } = await supabase.auth.getUser();
      this.user = data?.user || null;
    },
    async login(username: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password
      });

      if (data) {
        this.user = data.user;
        await router.push(this.returnUrl || '/dashboard/default');
      }
      if (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
      }
    },
    logout() {
      this.user = null;
      const {error} = supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
        alert('Logout failed: ' + error.message);
      }
      router.push('/login');
    }
  }
});
