<template>
    <v-row>
      <v-col cols="12" md="6">
        <v-carousel cycle height="250" hide-delimiters>
          <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
            <v-card class="pa-5 text-center">
              <v-avatar size="80">
                <v-img :src="testimonial.image" alt="User"></v-img>
              </v-avatar>
              <blockquote class="mt-4 font-italic">"{{ testimonial.feedback }}"</blockquote>
              <h4 class="font-weight-bold mt-2">{{ testimonial.name }}</h4>
              <p class="text-grey-darken-1">{{ testimonial.location }}</p>
              <v-rating v-model="testimonial.rating" dense readonly></v-rating>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <!-- Left: Review Form -->
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="text-h5 font-weight-bold">Leave a Review</v-card-title>
          <v-card-subtitle>Your feedback helps us improve our service. Thank you!</v-card-subtitle>

          <v-form @submit.prevent="submitReview">
            <v-text-field variant="outlined" label="Full Name" v-model="review.name" required></v-text-field>
            <v-textarea variant="outlined" label="Your feedback" v-model="review.feedback" required></v-textarea>

            <v-btn type="submit" color="primary" block>Submit</v-btn>
          </v-form>
        </v-card>
      </v-col>

      <!-- Right: Reviews Carousel -->

    </v-row>
</template>

<script setup>
import { ref } from 'vue';

const review = ref({
  image: null,
  name: '',
  address: '',
  feedback: '',
});

const testimonials = ref([
  {
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Carolyn Breeze',
    location: 'Sydney, Australia',
    feedback: 'I let Tesla Invest Pro do it for me because they know what they are doing.',
    rating: 5
  },
  {
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'James Carter',
    location: 'New York, USA',
    feedback: 'Great platform, my investments have never been better.',
    rating: 4.5
  },
  {
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Sophia Green',
    location: 'London, UK',
    feedback: 'Reliable and trustworthy service!',
    rating: 5
  },
  {
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Daniel Lee',
    location: 'Toronto, Canada',
    feedback: 'I love how transparent the system is. Great support too!',
    rating: 4.8
  }
]);

const submitReview = () => {
  console.log('Review submitted:', review.value);
  alert('Thank you for your feedback!');
};
</script>

<style scoped>
.v-avatar {
  border: 2px solid #ccc;
}
blockquote {
  font-size: 1.2rem;
}
</style>
