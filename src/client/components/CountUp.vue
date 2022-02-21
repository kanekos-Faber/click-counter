<!-- Please remove this file from your project -->
<template>
  <div>
    <div><button v-on:click="callAPI">Call inner API!</button></div>
    <div>
      The response was ...<br />
      {{ this.response }}<br />
      The error response was ...<br />
      {{ this.errorResponse }}<br />
    </div>
  </div>
</template>

<script>
export default {
  name: "CountUp",
  data() {
    return {
      response: "",
      errorResponse: "",
    };
  },
  methods: {
    callAPI(e) {
      let self = this;
      this.$axios
        .post("/api")
        .then(function (response) {
          self.response = response;
          self.errorResponse = "";
        })
        .catch(function (error) {
          self.response = "";
          self.errorResponse = error;
        });
    },
  },
};
</script>
