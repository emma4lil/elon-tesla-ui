<script setup lang="ts">
import LogoDark from '@/layouts/full/logo/LogoDark.vue';
import AnimatedBack from '@/components/AnimatedBack.vue';
import AuthLogin from './authForms/AuthLogin.vue';
</script>

<template>
  <div class="d-flex justify-center">
    <logo-dark class="mr-5" />
  </div>
  <v-row class="h-screen" no-gutters>
    <v-col cols="12" class="d-flex align-center bg-lightprimary position-relative">
      <animated-back />
      <v-container fluid class="position-relative" style="z-index: 1">
        <div class="pa-7 pa-sm-12">
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="6" md="7">
              <v-card elevation="0" class="loginBox">
                <v-card variant="outlined">
                  <v-card-text class="pa-9">
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <h2 class="text-secondary text-h2 mt-8">Hi, Welcome Back</h2>
                        <h4 class="text-disabled text-h4 mt-3">Enter your credentials to continue</h4>
                      </v-col>
                    </v-row>
                    <AuthLogin />
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}

.position-relative {
  position: relative;
}

.bg-lightprimary {
  background-color: rgba(245, 245, 245, 0.8); /* Add some transparency */
}
</style>