<template>
  <v-row align="center" justify="center">
    <v-layout row>
      <v-card
        class="mx-auto"
        color="#F9F9F9"
        width="300"
        style="margin: 20px;"
        v-for="(bhav, index) in bhavs"
        :key="index"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{bhav.SYMBOL}}</v-list-item-title>
            <v-list-item-subtitle>{{bhav.ISIN}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6" title="Series">{{bhav.SERIES}}</v-col>
          </v-row>
        </v-card-text>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-title>PREVIOUS CLOSE:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.PREVCLOSE }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>OPEN:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.OPEN }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>CLOSE:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.CLOSE }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>HIGH:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.HIGH }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Total Trades:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.TOTALTRADES }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Total Traded Qty:</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ bhav.TOTTRDQTY }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text>Total Traded Val: <b>{{ bhav.TOTTRDVAL }}</b></v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-row>
</template>
<style scoped>
.strike-through {
  text-decoration: line-through;
}
</style>


<script>
export default {
  name: "Nse",
  data() {
    return {
      loading: false,
      bhavs: []
    };
  },
  methods: {
    fetchBahvCopy() {
      return fetch(`${process.env.VUE_APP_NSE}nse`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then(response => {
          if (response) {
            this.bhavs = response[0];
            console.log(this.bhavs);
          }
        })
        .catch(error => {
          console.log("Error while fetching");
        });
    }
  },
  created() {
    this.fetchBahvCopy();
  }
};
</script>
