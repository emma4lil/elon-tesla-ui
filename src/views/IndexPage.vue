<template>
  <section>
    <Carousel />
  </section>

  <section>
    <TradingPlans/>
    <Testimonials/>
  </section>

  <section>
    <v-parallax :src="imageLink.main" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">
          Endorfine is a social network that allows everyone to reach a huge audience with a tap
        </div>
        <em>With the power of Endorfine you don't need to be famous or post pics of cute cats in order to get visibility</em>
        <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes"> Get more info </v-btn>
      </v-layout>
    </v-parallax>
  </section>

  <section>
    <v-container grid-list-md> </v-container>
  </section>

  <section>
    <v-parallax :src="imageLink.social_cover" height="380"> </v-parallax>
  </section>

  <FooterPanel />
</template>

<script>
import FooterPanel from '@/layouts/full/footer/FooterPanel.vue';
import Carousel from '@/components/Carousel.vue';
import VerticalHeader from '@/layouts/full/vertical-header/VerticalHeader.vue';
import TradingPlans from '@/components/TradingPlans.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
  name: 'App',
  components: { Testimonials, TradingPlans, VerticalHeader, Carousel, FooterPanel },
  data: function () {
    return {
      title: 'Endorfine',
      imageLink: {
        main: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea',
        sub_main:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5',
        logo: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df',
        social_cover:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4'
      },
      email: '',
      emailRules: [
        (v) => {
          return !!v || 'E-mail is required';
        },
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      subscribed: false
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    }
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log('new image height is ' + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  }
};
</script>

<style scoped></style>
