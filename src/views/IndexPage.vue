<template>
  <section>
    <Carousel />
  </section>

  <section>
    <TradingPlans/>
    <section>
      <v-parallax :src="imageLink.main" height="550">
        <div class="d-flex flex-column align-center justify-center text-center text-white font-weight-bold" style="height: 100%; max-width: 800px; margin: 0 auto;">
          <div class="text-h1 mt-3">SERVICES</div>
          <p>
            Attracting investments, Tesla Invest Pro implements dozens of projects related to the organization of cryptocurrency investment, forex, stocks and e-currency trading processes.
            The inflow of funds provides a non-stop process of earning money for a company, at the same time, the profit is evenly distributed among investors depending on the size of their deposits.
          </p>

          <div class="text-h1 mt-4">Investment offers</div>
          <p>
            Tesla Invest Pro offers a revolutionary investment model, modern, as transparent as possible and affordable for any person.
            If you already into investments, it’s time to form a stable passive income in this field.
          </p>

          <div class="text-h1 mt-4">Mission</div>
          <p>
            To build the Tesla Invest Pro brand as the world’s most popular financial broker institution recognized for innovation, superior performance, and creation of premium financial value for all stakeholders.
          </p>

          <div class="text-h1 mt-4">Core Values</div>
          <p>
            Integrity, Professionalism, Corporate Governance, Loyalty and Excellent Service.
          </p>
        </div>
      </v-parallax>
    </section>

    <Testimonials/>
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
        main: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
