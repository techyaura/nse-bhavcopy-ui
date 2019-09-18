<template>
  <!-- <v-toolbar color="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
  </v-toolbar>-->
  <v-content>
    <section>
      <v-parallax src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <img
            src="https://vuetifyjs.com/themes/parallax-starter/assets/vuetify.png"
            alt="Vuetify.js"
            height="200"
          />
          <h1 class="white--text mb-2 display-1 text-center">{{title}}</h1>
          <!-- <div class="subheading mb-4 text-center">Powered by Vuetify</div> -->
          <v-btn class="mt-12" color="blue lighten-2" dark large to="/login">Get Started</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">The best way to increase productivity</h2>
            <span class="subheading">{{title}}</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Organize life</div>
                  </v-card-title>
                  <v-card-text>Let {{title}} remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere, on any device – even offline.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Never worry</div>
                  </v-card-title>
                  <v-card-text>Let {{title}} remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere, on any device – even offline.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Completely Free</div>
                  </v-card-title>
                  <v-card-text>{{title}} helps millions of people feel more in control of their lives</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="https://vuetifyjs.com/themes/parallax-starter/assets/section.jpg"
        height="380"
      >
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">Increasing productivity has never been easier</div>
          <em>Kick-start your {{title}} today</em>
          <v-btn class="mt-12" color="blue lighten-2" dark large to="/login">Get Started</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                <b>{{title}}</b> is a company on an mission to make everyone life easier by simply organzing the daily to daily tasks in a smooth manner.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>For feedbacks & suggestion you can reah us @</v-card-text>
              <v-list class="transparent">
                <!-- <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>777-867-5309</v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
                <!-- <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Chicago, US</v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>sumanixinc@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      title: this.$APP_TITLE,
    };
  },
};
</script>
