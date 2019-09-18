
<script>
import { constants } from 'crypto';
import { REGISTER_MUTATION } from '../gql/auth.gql';
export default {
  name: 'RegisterModal',
  data() {
    return {
      title: this.$APP_TITLE,
      dialog: true,
      err: '',
      isSubmit: false,
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    // showForgot(value) {
    //   this.$emit('loginSwapEvent', value);
    // },
    handleSubmit() {
      this.err = '';
      this.isSubmit = true;
      const postData = {
        email: this.user.email,
        password: this.user.password,
      };
      return this.$apollo.mutate({
        mutation: REGISTER_MUTATION,
        variables: {
            input: postData
        }
      })
      .then((response) => {
        const { hashToken, message } = response.data.register;
        this.$toast.success(message);
        this.$router.push(`/verify-email/${hashToken}`);
      })
      .catch((err) => {
        console.log(err);
        this.isSubmit = false;
        this.err = err;
        this.$toast.error(err);
      });
    },
  },
};
</script>
<template>
  <v-content>
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Create an Account</h2>
            <span class="subheading">It's simple</span>
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
                    <div class="headline text-center">
                      <router-link to="/">{{title}}</router-link>
                    </div>
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
                          prepend-icon="email"
                          label="Email address"
                          name="email"
                          type="text"
                          v-model="user.email"
                          required
                        ></v-text-field>

                        <v-text-field
                          prepend-icon="lock"
                          id="password"
                          label="Password"
                          name="password"
                          type="password"
                          v-model="user.password"
                          required
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn to="/login" color="primary" type="submit" text>Already account?</v-btn>
                      <v-btn
                        color="primary"
                        type="submit"
                        :disabled="isSubmit"
                        :value="!isSubmit? 'Log in' : 'Logging In ...'"
                      >Register</v-btn>
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
