<template>
<transition name="fade" appear before-leave>
  <main @mousewheel="change" @scroll="change">
    <div class="home-text">
      <div class="name">
        <p>Hi! My name is</p>
        <h1>Thomi Kamilla</h1>
      </div>
      <p class="summary">I taught myself how to code to expand my love for the digital world. <br> I am on a journey to architect my visions to a new skyline of wonders. <br> Scroll down to find out more about my work and passions!
      </p>
    </div>
    <div class="hero-img">
        <div @mouseenter="img1 = false" @mouseout="img1 = true" class="img-container">
          <img v-if="img1" class="image" :src="images.img1" alt="">
          <img v-if="!img1" class="image" :src="images.img2" alt="">
        </div>
    </div>
    <router-link to="/projects">
      <button class="arrow"><i class="fas fa-angle-double-down"></i></button>
    </router-link>
  </main>
</transition>
</template>

<script>
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
main {
  height: 90vh;
  display: flex;
  position: relative;

  a {
    color: inherit;
  }

  .arrow {
    position: absolute;
    bottom: 1.7rem;
    color: inherit;
    left: 50%;
    background: none;
    transform: translateX(-50%);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    animation: downLoop 1.3s infinite ease-in-out;

    @keyframes downLoop {
      0% {
        transform: translateY(-10px);
      }

      100% {
        transform: translateY(8px);
      }
    }
  }

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
    .summary {
      margin-top: 4rem;
      font-size: 1.4rem;
      line-height: 1.8;
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

  @include for-phone {
    flex-direction: column;

    .arrow {
      position: absolute;
      bottom: 1rem;
      left: 50%;
    }

    .home-text {
      margin: 0;
      width: 100%;
      text-align: center;
      margin-top: 2rem;

      .name {
        font-size: 1.5rem;
        margin: 0 0 3rem;
        line-height: 1;

        p {
          font-size: 1.5rem;
        }
      }

      .summary {
        margin: 0.5rem auto;
        font-size: 1.2rem;
      }
    }

    .hero-img {
      width: 100%;
      text-align: center;
      margin: 3.5rem auto;
      display: flex;
      justify-content: center;
      .img-container {
        width: 5rem;
        height: 5rem;
        img {
          border-radius: 100%;
        }
      }
    }
  }

  @include for-tablet {
    flex-direction: column;
    .home-text {
      margin: 0;
      width: 100%;
      text-align: center;
      margin-top: 1.5rem;

      .name {
        font-size: 2rem;
        margin: 0 0 3rem;
        line-height: 1;

        p {
          font-size: 2rem;
        }
      }

      .summary {
        margin: 1rem;
        font-size: 1.3rem;
      }
    }

    .hero-img {
      width: 100%;
      text-align: center;
      margin: 3.5rem auto;
      display: flex;
      justify-content: center;
      .img-container {
        width: 15rem;
        height: 21rem;
      }
    }
  }
}
</style>
