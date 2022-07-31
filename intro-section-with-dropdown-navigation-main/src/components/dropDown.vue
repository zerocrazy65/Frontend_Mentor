<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      {{ title }}
    </a>
    <div class="arrow" v-if="isOpen">
      <img src="../assets/images/icon-arrow-up.svg" alt="up-arrow" />
    </div>
    <div class="arrow" v-else>
      <img src="../assets/images/icon-arrow-down.svg" alt="down-arrow" />
    </div>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, index) in items" :key="index" class="menu-item">
          <div class="sub-item">
            <img :src="item.src" :alt="item.alt" />
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.arrow {
  margin-top: -2px;
  margin-left: 5px;
}

nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
.sub-menu {
  padding: 0.5rem;
  z-index: 1;
}
.sub-menu .menu-item {
  font-size: 0.9rem;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: var(--almost-white);
  top: calc(100% + 18px);
  transform: translateX(-100%);
  width: max-content;
  margin-left: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0.5px rgba(0, 0, 0, 0.15);
}

.sub-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.sub-item img {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1200px) {
  nav .menu-item .sub-menu {
    transform: translateX(-160%);
    margin-left: 180px;
  }
}
@media (max-width: 800px) {
  nav .menu-item .sub-menu {
    background-color: var(--almost-white);
    transform: 0;
    position: relative;
    margin-left: 0;
    top: calc(10% + 18px);
    transform: translateX(0);
    width: max-content;
    border-radius: 0;
    margin-left: -100px;
    box-shadow: none;
  }
}
</style>
