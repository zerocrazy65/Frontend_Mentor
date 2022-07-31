<template>
  <div class="container">
    <div class="detail">
      <div class="header">
        <h1>Make remote work</h1>
      </div>
      <div class="content">
        <p>
          Get your team in sync, no matter your location. Streamline procesees,
          create team rutuals, and watch productivity soar.
        </p>
      </div>
      <button>Learn more</button>
      <div class="logo">
        <img src="../assets/images/client-databiz.svg" alt="logo1" />
        <img src="../assets/images/client-audiophile.svg" alt="logo2" />
        <img src="../assets/images/client-meet.svg" alt="logo3" />
        <img src="../assets/images/client-maker.svg" alt="logo4" />
      </div>
    </div>
    <div class="picture">
      <img
        class="desktop"
        src="../assets/images/image-hero-desktop.png"
        alt="picture brand"
      />
      <img
        class="mobile"
        src="../assets/images/image-hero-mobile.png"
        alt="picture brand"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-inline: auto;
  max-width: 80rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-end;
}
.detail {
  max-width: 45rem;
  padding-left: 1rem;
}
.picture {
  width: clamp(40rem, 10vw, 3rem);
  height: auto;
}
.mobile {
  display: none;
}
.picture img {
  max-width: 100%;
}
h1 {
  line-height: 6rem;
  font-weight: 700;
  font-size: 5rem;
  margin-bottom: 3rem;
}

.content {
  padding-right: 10rem;
  margin-bottom: 2rem;
  color: var(--medium-gray);
}
button {
  border: 1px solid var(--almost-black);
  border-radius: 15px;
  background-color: var(--almost-black);
  margin-bottom: 5rem;
  color: var(--almost-white);
  padding: 1rem 2rem 1rem 2rem;
}
button:hover {
  transition: 0.3s;
  background-color: transparent;
  color: var(--almost-black);
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
}
.logo img {
  margin-right: 2rem;
}
@media (max-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
  }
  .content {
    padding-right: 0;
  }
  .container {
    padding: 0rem 2rem 2rem 2rem;
  }
}
@media (max-width: 1000px) {
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
}
@media (max-width: 900px) {
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  .container {
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
  }
  .picture {
    width: clamp(30rem, 10vw, 3rem);
  }
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
  .logo {
    justify-content: center;
    margin-top: 0;
  }
  button {
    font-weight: 700;
    font-size: large;
    margin-bottom: 1rem;
    padding: 1rem 3rem 1rem 3rem;
  }
}
</style>
