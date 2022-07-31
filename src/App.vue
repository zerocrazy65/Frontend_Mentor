<template>
  <div>
    <navBar />
    <conTent />
  </div>
</template>

<script>
import conTent from "./components/conTent.vue";
import navBar from "./components/navBar.vue";

export default {
  components: {
    navBar,
    conTent,
  },
};
</script>
