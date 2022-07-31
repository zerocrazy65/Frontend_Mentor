<template>
  <div class="menu" v-if="!mobile">
    <div class="selection">
      <dropDown title="Features" :items="Features"></dropDown>
      <dropDown title="Company" :items="Company"></dropDown>
      <div class="menu-item"><a href="#">Careers</a></div>
      <div class="menu-item"><a href="#">About</a></div>
    </div>
    <div class="sign">
      <div class="menu-item"><a href="#">Login</a></div>
      <div class="menu-item" id="register"><a href="#">Register</a></div>
    </div>
  </div>
</template>
<script>
import dropDown from "./dropDown.vue";
export default {
  components: { dropDown },
  data() {
    return {
      Features: [
        {
          src: "../../src/assets/images/icon-todo.svg",
          title: "Todo List",
          link: "#",
          alt: "todo icon",
        },
        {
          src: "../../src/assets/images/icon-calendar.svg",
          title: "Calenda",
          link: "#",
          alt: "Calenda icon",
        },
        {
          src: "../../src/assets/images/icon-reminders.svg",
          title: "Reminders",
          link: "#",
          alt: "Reminders icon",
        },
        {
          src: "../../src/assets/images/icon-planning.svg",
          title: "Planning",
          link: "#",
          alt: "Planning icon",
        },
      ],
      Company: [
        {
          title: "History",
          link: "#",
        },
        {
          title: "Our Team",
          link: "#",
        },
        {
          title: "Blog",
          link: "#",
        },
      ],
    };
  },
};
</script>
