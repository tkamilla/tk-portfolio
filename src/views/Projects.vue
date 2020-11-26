<template>
<transition name="fade" appear>
  <section class="project" @mousewheel="change">
    <h1>Projects</h1>
    <main>
      <div class="timeline">
        <div class="shapes">
          <div class="content">
            <div @click="changeProject(1)" class="circle" :class="{'selected': num == 1}"></div>
            <div v-show="num == 1" class="date">Nov 2020</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div @click="changeProject(2)" class="circle" :class="{'selected': num == 2}"></div>
            <div v-show="num == 2" class="date">Nov 2020</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div @click="changeProject(3)" class="circle" :class="{'selected': num == 3}"></div>
            <div v-show="num == 3" class="date">Sep 2020</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div @click="changeProject(4)" class="circle" :class="{'selected': num == 4}"></div>
            <div v-show="num == 4" class="date">Sep 2020</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div @click="changeProject(5)" class="circle" :class="{'selected': num == 5}"></div>
            <div v-show="num == 5" class="date">Aug 2020</div>
          </div>
        </div>
      </div>
        <div class="project-wrapper">
          <article class="card">
            <div class="image-container">
              <img :src="project.bgd" :alt="project.bgd">
              <div class="icons-wrap">
                <div class="icons">
                  <img :src="project.icon" :alt="project.icon">
                </div>
              </div>
            </div>
            <div class="project-info">
              <h2>{{project.name}}</h2>
              <p>{{project.desc}}</p>
              <a :href="project.link" target="_blank">View Project</a>
            </div>
          </article>
        </div>
    </main>
  </section>
</transition>
</template>

<script>
import changeView from "@/mixins/changeView";
export default {
  data() {
    return {
      images: {
        mevn: require("@/assets/mevn.png"),
      },
      project: {},
      projects: [
        {
          name: "Sojournary",
          desc:
            "Travel itenerary management web app for personal and business purposes.",
          bgd: require("@/assets/sojournary.jpg"),
          icon: require("@/assets/mevn.png"),
          link: "https://bit.ly/2UIL4ZO",
        },
        {
          name: "Portfolio",
          desc:
            "A web app to keep track of your current, past, and future entertainment.",
          bgd: require("@/assets/portfolio.jpg"),
          icon: require("@/assets/mern.png"),
          link: "https://bit.ly/2UIL4ZO",
        },
        {
          name: "E-Tracker",
          desc:
            "A web app to keep track of your current, past, and future entertainment.",
          bgd: require("@/assets/e-tracker.jpg"),
          icon: require("@/assets/mern.png"),
          link: "https://bit.ly/3jXvhAS",
        },
        {
          name: "Template Flipper",
          desc:
            "A web app to keep track of your current, past, and future entertainment.",
          bgd: require("@/assets/flipper.jpg"),
          icon: require("@/assets/frontend.png"),
          link: "https://bit.ly/323WVpZ",
        },
        {
          name: "8 Charms",
          desc:
            "A web app to keep track of your current, past, and future entertainment.",
          bgd: require("@/assets/charms.jpg"),
          icon: require("@/assets/frontend.png"),
          link: "https://bit.ly/3bAcCIr",
        },
      ],
      num: 1,
    };
  },
  mixins: [changeView],
  mounted() {
    this.project = this.projects[0];
  },
  methods: {
    change(e) {
      this.changeView(e, "/", "/about");
    },
    changeProject(num) {
      this.project = this.projects[num - 1];
      this.num = num;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.7s ease-in;
}

.fade-enter-from {
  transform: translateY(7px);
  opacity: 0;
}

.scale-enter-active {
  transition: all 1s ease-out;
}

.scale-enter-from {
  transform: scale(0.1);
  opacity: 0;
}

.scale-enter-to {
  transform: scale(1);
  opacity: 1;
}

.project {
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 1.5rem 0;

    .timeline {
      width: 20%;
      height: 100%;
      display: flex;

      .shapes {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .line {
        width: 2px;
        height: 2rem;
        margin: 0.3rem 1rem;
        background: $textColor;
      }

      .content {
        display: flex;
        align-items: center;

        .circle {
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          margin-right: 0.7rem;
          border: 1px solid $textColor;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }

        &:hover {
          animation: fadeIn 1s infinite ease-in-out;
        }

        .selected {
          background: $textColor;
          border: none;
          animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .project-wrapper {
    width: 100%;
    height: 70vh;
    // border: 1px solid blue;
    border-radius: 10px;
    background: $textColor;
    color: white;
    display: flex;
    // justify-content: center;

    .card {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    .image-container {
      width: 50%;
      height: 80%;
      display: flex;
      position: relative;
      background: $textColor;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      .icons-wrap {
        position: absolute;
        width: 120px;
        height: 60px;
        bottom: -2rem;
        right: 0;
        transform: translateX(50%);
        display: flex;
        justify-content: flex-end;

        .icons {
          background: white;
          width: 120px;
          height: 60px;
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.7);

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .project-info {
      width: 40%;
      padding: 0 1rem 1rem;

      h2 {
        position: relative;
        top: -10px;
        margin-bottom: 0.7rem;
        font-weight: bold;
      }

      p {
        min-height: 3rem;
        margin-bottom: 2rem;
      }

      a {
        padding: 0.7rem 0.5rem;
        // margin: 1.5rem 0;
        background: none;
        color: white;
        border: 1px solid white;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s ease-in;

        &:hover {
          box-shadow: 0 7px 10px rgba(255, 255, 255, 0.15);
          background: white;
          color: $textColor;
        }
      }
    }
  }
}
</style>
