<template>
  <v-container fluid class="about-us-page pa-0">
    <!-- Hero Section -->
    <section class="hero-section text-center py-16">
      <v-container>
        <h1 class="text-h2 font-weight-bold mb-4">About Tesla Stocks</h1>
        <p class="text-subtitle-1 mx-auto" style="max-width: 800px;">
          We are a leading investment platform dedicated to helping our clients achieve their financial goals through innovative trading solutions and expert guidance.
        </p>
      </v-container>
    </section>

    <!-- Our Story Section -->
    <section class="our-story-section py-12">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h3 font-weight-bold mb-4">Our Story</h2>
            <p class="text-body-1 mb-4">
              Founded in 2020, Tesla Stocks has grown from a small startup to one of the most trusted investment platforms in the industry. Our journey began with a simple mission: to make investing accessible to everyone.
            </p>
            <p class="text-body-1 mb-4">
              Over the years, we've expanded our services, improved our technology, and built a team of experts dedicated to helping our clients succeed. Today, we serve thousands of investors worldwide, providing them with the tools and knowledge they need to make informed investment decisions.
            </p>
            <p class="text-body-1">
              Our commitment to innovation, transparency, and customer satisfaction has earned us a reputation as a leader in the investment industry. We continue to evolve and adapt to meet the changing needs of our clients and the market.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img
              src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              max-width="500"
              class="rounded-lg"
              cover
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Mission Section -->
    <section class="our-mission-section py-12 bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">Our Mission & Values</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-6 h-100" elevation="2" rounded="lg">
              <h3 class="text-h4 font-weight-bold mb-4">Mission</h3>
              <p class="text-body-1">
                To build the Tesla Stocks brand as the world's most popular financial broker institution recognized for innovation, superior performance, and creation of premium financial value for all stakeholders.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6 h-100" elevation="2" rounded="lg">
              <h3 class="text-h4 font-weight-bold mb-4">Core Values</h3>
              <v-row>
                <v-col cols="6" v-for="(value, index) in coreValues" :key="index">
                  <div class="d-flex align-center mb-4">
                    <v-icon color="primary" class="mr-2">{{ value.icon }}</v-icon>
                    <span class="text-subtitle-1 font-weight-medium">{{ value.text }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Our Team Section -->
    <section class="our-team-section py-12">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">Our Leadership Team</h2>
            <p class="text-subtitle-1 mt-2">Meet the experts behind Tesla Stocks</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(member, index) in teamMembers" :key="index">
            <v-card class="team-member-card h-100" elevation="2" rounded="lg">
              <v-img :src="member.image" height="300" cover></v-img>
              <v-card-title class="text-h5 font-weight-bold">{{ member.name }}</v-card-title>
              <v-card-subtitle>{{ member.position }}</v-card-subtitle>
              <v-card-text>
                <p class="text-body-2">{{ member.bio }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon v-for="(social, i) in member.socials" :key="i" :color="social.color">
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Section -->
    <section class="contact-section py-12 bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">Get In Touch</h2>
            <p class="text-subtitle-1 mt-2">We'd love to hear from you</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2" rounded="lg">
              <h3 class="text-h4 font-weight-bold mb-4">Contact Information</h3>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-4">mdi-map-marker</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold">Address</h4>
                  <p class="text-body-2">123 Investment Street, Financial District, New York, NY 10004</p>
                </div>
              </div>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold">Phone</h4>
                  <p class="text-body-2">+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-4">mdi-email</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold">Email</h4>
                  <p class="text-body-2">info@teslastocks.com</p>
                </div>
              </div>
              <div class="d-flex align-center">
                <v-icon color="primary" class="mr-4">mdi-clock</v-icon>
                <div>
                  <h4 class="text-subtitle-1 font-weight-bold">Working Hours</h4>
                  <p class="text-body-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2" rounded="lg">
              <h3 class="text-h4 font-weight-bold mb-4">Send Us a Message</h3>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="First Name"
                      variant="outlined"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Last Name"
                      variant="outlined"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-text-field
                  label="Email"
                  variant="outlined"
                  density="comfortable"
                ></v-text-field>
                <v-text-field
                  label="Subject"
                  variant="outlined"
                  density="comfortable"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  variant="outlined"
                  rows="4"
                ></v-textarea>
                <v-btn color="primary" size="large" block>Send Message</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const coreValues = ref([
  { icon: 'mdi-shield-check', text: 'Integrity' },
  { icon: 'mdi-account-tie', text: 'Professionalism' },
  { icon: 'mdi-gavel', text: 'Corporate Governance' },
  { icon: 'mdi-handshake', text: 'Loyalty' },
  { icon: 'mdi-star', text: 'Excellence' },
  { icon: 'mdi-account-group', text: 'Teamwork' }
]);

const teamMembers = ref([
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'John has over 20 years of experience in the financial industry and has led Tesla Stocks since its founding.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    socials: [
      { icon: 'mdi-linkedin', color: 'blue' },
      { icon: 'mdi-twitter', color: 'blue-lighten-3' }
    ]
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Investment Officer',
    bio: 'Sarah oversees all investment strategies and has a proven track record of delivering exceptional returns for our clients.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    socials: [
      { icon: 'mdi-linkedin', color: 'blue' },
      { icon: 'mdi-twitter', color: 'blue-lighten-3' }
    ]
  },
  {
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    bio: 'Michael leads our technology team, ensuring that our platform is secure, reliable, and at the cutting edge of innovation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    socials: [
      { icon: 'mdi-linkedin', color: 'blue' },
      { icon: 'mdi-github', color: 'grey-darken-3' }
    ]
  }
]);
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-secondary-base) 100%);
  color: white;
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .our-story-section,
  .our-mission-section,
  .our-team-section,
  .contact-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>