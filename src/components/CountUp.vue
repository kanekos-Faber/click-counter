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
    <div><button v-on:click="counter += 1">count up!</button></div>
    <div>Here is your counter. It's {{ counter }} now.</div>
  </div>
</template>

<script>
export default {
  name: "CountUp",
  data: function () {
    return { counter: 0 };
  },
};
</script>
