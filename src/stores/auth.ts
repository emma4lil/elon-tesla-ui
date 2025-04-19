import { defineStore } from 'pinia';
import { router, type User } from '@/router';
import { supabase } from '@/superbase.ts';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user:  null as User | null,
    returnUrl: null as string | null
  }),

  actions: {
    async onInit() {
      const { data: { user} } = await supabase.auth.getUser();
      this.user = user;
    },

    async login(username: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password
      });

      if (data?.user) {
        this.user = data.user;
        await router.push(this.returnUrl || '/dashboard/default');
      } else if (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
      }
    },

    async logout() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
        alert('Logout failed: ' + error.message);
      }
      this.user = null;
      await router.push('/login');
    }
  }
});
