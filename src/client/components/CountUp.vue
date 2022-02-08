<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    Let's count up!
    <div><button v-on:click="countUp">count up!</button></div>
    <div>
      Here is your counter on session {{ this.sessionId }}. It's
      {{ this.count }} now.
    </div>
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
const axios = require("axios").default;
export default {
  name: "CountUp",
  data() {
    return {
      response: "",
      errorResponse: "",
    };
  },
  created() {
    let counter = this.$store.state.counter;
    if (counter === undefined || counter.sessionId.length == 0) {
      this.$store.commit("counter/initSession");
    }
    counter = this.$store.state.counter;
    this.sessionId = counter.sessionId;
    this.counter = counter.count;
  },
  computed: {
    sessionId: function () {
      return this.$store.state.counter.sessionId;
    },
    count: function () {
      return this.$store.state.counter.count;
    },
  },
  methods: {
    countUp(e) {
      this.$store.commit("counter/incrementCount");
      this.counter = this.$store.state.counter.count;
    },
    callAPI(e) {
      let self = this;
      axios
        .get("/api")
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
