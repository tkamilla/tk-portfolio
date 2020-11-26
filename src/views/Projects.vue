<template>
<section class="project" @mousewheel="change">
  <h1>Projects</h1>
  <main>
    <div class="timeline">
      <div class="shapes">
        <div class="circle"></div>
        <div class="line"></div>
        <div class="circle"></div>
        <div class="line"></div>
        <div class="circle"></div>
        <div class="line"></div>
        <div class="circle"></div>
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <div class="texts">
        <div v-show="sojournary" class="date">Nov 2020</div>
        <div v-show="isSelected" class="date">Nov 2020</div>
        <div v-show="isSelected" class="date">Sep 2020</div>
        <div v-show="isSelected" class="date">Sep 2020</div>
        <div v-show="isSelected" class="date">Aug 2020</div>
      </div>
    </div>
    <div class="wrapper">
      <article class="card">
        <div class="image-container bg-blue-900">
          <img :src="project.bgd" alt="">
        </div>
        <div class="project-info">
          <div class="icons-wrap">
            <div class="icons mern">
              <img :src="project.icon" alt="">
            </div>
          </div>
          <h3>{{project.name}}</h3>
          <p>{{project.desc}}</p>
        </div>
      </article>
    </div>
  </main>
</section>
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
        },
        {
          name: "E-Tracker",
          desc:
            "A web app to keep track of your current, past, and future entertainment.",
          bgd: require("@/assets/e-tracker.jpg"),
          icon: require("@/assets/mern.png"),
        },
      ],
      hoverCard: false,
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
  },
};
</script>

<style lang="scss" scoped>
.project {
  height: 100%;
  main {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;

    .timeline {
      width: 20%;
      display: flex;
      border: 1px solid #ccc;

      .shapes,
      .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .circle {
          width: 2rem;
          height: 2rem;
          border-radius: 100%;
          border: 1px solid $textColor;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .line {
          width: 2px;
          height: 2rem;
          margin: 0.2rem 0;
          background: $textColor;
        }

        .date {
          margin: 1.45rem 0.7rem;
        }
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .wrapper {
    width: 80%;
    height: 70vh;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
  }
  .card {
    border-radius: 10px;
    // background: $textColor;
    // color: white;
    padding: 0 1.8rem;
    position: relative;
    height: 20vh;
  }
  .image-container {
    display: flex;
    position: relative;
    // top: -2rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    border: 1px solid $textColor;
    border-radius: 10px;
  }
  .image-container img {
    width: 300px;
    height: 200px;
  }

  .project-info {
    position: relative;
    // top: -2rem;
    padding: 0 1rem 1rem;
  }

  .icons-wrap {
    position: relative;
    // top: -2rem;
    display: flex;
    justify-content: flex-end;
  }
}

.project .project-info .icons {
  background: white;
  width: 120px;
  height: 60px;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.3);
}

.project-info .icons img {
  width: 40px;
  height: 40px;
}

.project-info .mern img {
  width: 100%;
  height: 100%;
}

.project-info h3 {
  position: relative;
  top: -10px;
  margin-bottom: 0.7rem;
  font-size: 18px;
  font-weight: bold;
}

.project-info p {
  min-height: 3rem;
}

.action {
  padding: 1rem;
}
</style>
