<template>
<nav>
  <div class="bar">
    <router-link to="/" v-if="home">
      <transition name="slideIn" appear>
        <div @mouseleave="home = false"  class="page-bar">Home</div>
      </transition>
    </router-link>
    <div v-else @mouseover="home = true" class="box" :class="{'active': isActive === '/'}"
    ></div>
  </div>
  <div class="bar">
  <router-link to="/projects" v-if="projects">
    <transition name="slideIn" appear>
      <div @mouseleave="projects = false"  class="page-bar">Projects</div>
    </transition>
  </router-link>
    <div v-else @mouseover="projects = true" class="box" :class="{'active': isActive === '/projects'}"></div>
  </div>
  <div class="bar">
  <router-link to="/about" v-if="about">
    <transition name="slideIn" appear>
      <div @mouseleave="about = false"  class="page-bar">About</div>
    </transition>
  </router-link>
    <div v-else @mouseover="about = true" class="box" :class="{'active': isActive === '/about'}"></div>
  </div>
  <div class="bar">
  <router-link to="/contact" v-if="contact">
    <transition name="slideIn" appear>
      <div @mouseleave="contact = false"  class="page-bar">Contact</div>
    </transition>
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
.slideIn-enter-active {
  transition: all 0.3s ease-in;
}

.slideIn-enter-from {
  transform: translateX(10px);
  opacity: 0.3;
}

.slideIn-enter-to {
  opacity: 1;
}

nav {
  width: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bar {
    width: 5rem;
    display: flex;
    flex-direction: column;
    margin: 0.3rem 0;
    .page-bar {
      background: $barSecond;
      color: white;
      text-align: center;
      width: 100%;
      padding: 3px 5px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        animation: slideIn 1s;
      }
      @keyframes slideIn {
        0% {
          // transform: scale(0.5);
          // transform: scaleX(0.5);
          opacity: 0.5;
        }
        100% {
          // transform: scaleX(1);
          // transform: scale(1);
          opacity: 1;
        }
      }
    }
    .box {
      width: 1rem;
      border-radius: 4px;
      align-self: flex-end;
      height: 30px;
      // margin: 0.2rem 0;
      background: $barColor;
      // background: #a2a2a1;
    }
    .active {
      background: $barSecond;
    }
  }
}
</style>