
<script>
import { constants } from 'crypto';

export default {
  name: 'VerifyEmail',
  data() {
    return {
      title: this.$APP_TITLE,
      err: '',
      isSubmit: false,
      hashToken: '',
      user: {
        otp: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.err = '';
      this.isSubmit = true;
      const postData = {
        otp: this.user.otp,
        hashToken: this.hashToken,
      };
      const query = `
      mutation {
        emailVerificationByOtp(input: {otp: "${postData.otp}", hashToken: "${postData.hashToken}"}) {
          message
          hashToken
        }
      }
      `;
      return fetch(`${this.$BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/graphql',
        },
        body: query,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((response) => {
          const { hashToken, message } = response.data.emailVerificationByOtp;
          this.$toast.success(message);
          this.$router.push('/login');
        })
        .catch((err) => {
          this.isSubmit = false;
          this.err = err;
          this.$toast.error(err);
        });
    },
  },
  created() {
    this.hashToken = this.$route.params.hash;
  },
};
</script>
<template>
  <v-content>
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Verify Your Email Address</h2>
            <span class="subheading">Enter OTP received on your email address</span>
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
                    <div class="headline text-center">{{title}}</div>
                  </v-card-title>
                  <v-card-text>Life can feel overwhelming, but it doesn’t have to. {{title}} lets you keep track of everything in one place, so you can get it all done and enjoy more peace of mind along the way.</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="pa-12" style="min-height:400px;">
                  <form @submit.prevent="handleSubmit">
                    <v-card-text>
                      <v-form>
                        <v-text-field
                          label="Enter OTP"
                          name="otp"
                          type="text"
                          v-model="user.otp"
                          required
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        type="submit"
                        :disabled="isSubmit"
                      >{{!isSubmit? 'Verify Email' : 'verifying ...'}}</v-btn>
                    </v-card-actions>
                  </form>
                </v-card>
              </v-flex>
              <!-- <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>-->
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>
