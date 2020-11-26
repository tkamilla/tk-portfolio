<template>
<transition name="fade" appear before-leave>
  <main @mousewheel="change" >
    <div class="home-text">
      <div class="name">
        <p>Hi! My name is</p>
        <h1>Thomi Kamilla</h1>
      </div>
      <p>I taught myself how to code to expand my love for the digital world. <br> I am on a journey to architect my visions to a new skyline of wonders. <br> Scroll down to find out more about my work and passions!
      </p>
    </div>
    <div class="hero-img">
        <div @mouseenter="img1 = false" @mouseout="img1 = true" class="img-container">
          <img v-if="img1" class="image" :src="images.img1" alt="">
          <img v-if="!img1" class="image" :src="images.img2" alt="">
        </div>
    </div>
  </main>
</transition>
</template>

<script>
// @ is an alias to /src
import changeView from "@/mixins/changeView";

export default {
  name: "Home",
  mixins: [changeView],
  data() {
    return {
      img1: true,
      delayed: true,
      images: {
        img1: require("@/assets/tk1.jpeg"),
        img2: require("@/assets/tk2.jpg"),
      },
    };
  },
  methods: {
    change(e) {
      this.changeView(e, "/contact", "/projects");
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.7s ease-in;
}

.fade-enter-from {
  transform: translateX(5px);
  opacity: 0;
}
// .fade-leave-to {
// }
main {
  height: 100%;
  display: flex;

  .home-text {
    width: 70%;
    margin-top: 1.5rem;
    .name {
      width: 100%;
      margin-left: 2rem;
      font-size: 2rem;
      p {
        font-size: 2.5rem;
      }
      h1 {
        font-family: "Dancing Script", cursive;
        text-align: center;
      }
    }
    p {
      margin-top: 4rem;
      font-size: 1.4rem;
    }
  }

  .hero-img {
    width: 40%;
    margin-top: 4rem;
    .img-container {
      z-index: 20;
      position: relative;
      width: 18.75rem;
      height: 26.25rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
