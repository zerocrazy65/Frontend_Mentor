<template>
  <header>
    <nav>
      <div class="brand">
        <img src="../assets/images/logo.svg" alt="brand_img" />
      </div>
      <button v-if="mobile" @click="scrollmenu = !scrollmenu">
        <div class="click" v-if="scrollmenu">
          <img src="../assets/images/icon-close-menu.svg" alt="" />
        </div>
        <div v-else>
          <img src="../assets/images/icon-menu.svg" alt="" />
        </div>
      </button>
      <navMenu :class="{ open: scrollmenu }" />
    </nav>
  </header>
</template>
<script>
import navMenu from "./navMenu.vue";

export default {
  components: { navMenu },
  data() {
    return {
      mobile: true,
      changeicon: true,
      scrollmenu: false,
    };
  },
  methods: {
    handleView() {
      this.mobile = window.innerWidth <= 800;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style>
header {
  width: 100vw;
  background-color: var(--almost-white);
  padding: 30px;
}
.brand {
  margin-right: 30px;
}
nav {
  padding: 0.8rem;
  justify-content: space-between;
  display: flex;
}
img {
  margin-top: 11px;
}
.menu {
  width: 100%;
  gap: 1rem;
  display: flex;
}
.selection {
  width: 100%;
  gap: 1rem;
  flex-direction: row;
  display: flex;
}
.sign {
  gap: 1rem;
  display: flex;
}
button {
  background-color: var(--almost-white);
  border: 0;
}
nav .menu-item {
  color: var(--almost-white);
  padding: 10px 10px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item a {
  color: var(--medium-gray);
  text-decoration: none;
}
nav .menu-item a:hover {
  color: var(--almost-black);
}

#register:hover {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 0.3px solid var(--medium-gray);
  border-radius: 15px;
}

@media (max-width: 1200px) {
  a {
    font-size: 1rem;
  }
}
@media (max-width: 900px) {
  header {
    padding: 0;
  }
}
@media (max-width: 800px) {
  header {
    width: 100%;
    padding: 0;
    z-index: 1;
  }
  nav {
    justify-content: space-between;
  }
  .menu {
    background-color: var(--almost-white);
    height: 100vh;
    padding: 1rem 0 1rem 1rem;
    margin-top: 4rem;
    position: absolute;
    flex-direction: column;
    left: 100%;
  }
  .sign {
    margin-top: 1rem;
    flex-direction: column;
  }
  .selection {
    width: 100%;
    gap: 1rem;
    flex-direction: column;
    display: flex;
  }
  button {
    z-index: 1;
  }
  .open {
    transition: 0.4s;
    transform: translateX(-10rem);
  }
}
</style>
