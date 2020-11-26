<template>
<nav>
  <div class="bar">
    <router-link to="/" v-if="home">
      <div @mouseout="home = false"  class="page-bar">Home</div>
    </router-link>
    <div v-else @mouseover="home = true" class="box" :class="{'active': isActive === '/'}"
    ></div>
  </div>
  <div class="bar">
  <router-link to="/projects" v-if="projects">
    <div @mouseout="projects = false"  class="page-bar">Projects</div>
  </router-link>
    <div v-else @mouseover="projects = true" class="box" :class="{'active': isActive === '/projects'}"></div>
  </div>
  <div class="bar">
  <router-link to="/about" v-if="about">
    <div @mouseout="about = false"  class="page-bar">About</div>
  </router-link>
    <div v-else @mouseover="about = true" class="box" :class="{'active': isActive === '/about'}"></div>
  </div>
  <div class="bar">
  <router-link to="/contact" v-if="contact">
    <div @mouseout="contact = false"  class="page-bar">Contact</div>
  </router-link>
    <div v-else @mouseover="contact = true" class="box" :class="{'active': isActive === '/contact'}"></div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      barName: false,
      home: false,
      projects: false,
      about: false,
      contact: false,
      isActive: "",
    };
  },
  watch: {
    $route(to) {
      this.isActive = to.path;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bar {
    width: 5rem;
    display: flex;
    flex-direction: column;
    margin: 0.2rem 0;
    .page-bar {
      background: $textColor;
      color: white;
      text-align: center;
      width: 100%;
      padding: 3px 5px;
      height: 30px;
      border-radius: 4px 0 0 4px;
      cursor: pointer;
    }
    .box {
      width: 1rem;
      border-radius: 4px 0 0 4px;
      align-self: flex-end;
      height: 30px;
      // margin: 0.2rem 0;
      background: #a2a2a1;
    }
    .active {
      background: $textColor;
    }
  }
}
</style>