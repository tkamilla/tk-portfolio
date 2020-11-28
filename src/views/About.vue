<template>
<transition name="fade" appear>
  <main @mousewheel="change" @scroll="change">
    <div class="subhead">
      <div class="subtitle">
        <h2>Meet</h2>
        <h2 id="me">Thomi</h2>
      </div>
      <div class="skills">
        <h3>Skills</h3>
        <ul>
          <li>Vue</li>
          <li>VueX</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SASS/SCSS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Adobe XD</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
    <div class="texts">
      <p>I am a self-taught Software Engineer who found the joy of coding after traveling the world.</p>
      <br>
      <p>During my travel, I realized that my dream is to be able to work from anywhere in the world and do something that I truly love. And due to COVID, I had to stop my travel journey. So I took this chance to learn to code from YouTube videos and working on side projects.</p>
      <br>
      <p>I am taking my life experiences and figuring out real life problems to solve. This new found passion sparks many great ideas and visions that I want to pursuit. I continously challenge myself to find solutions and determine to accomplish all my goals.</p>
    </div>
  </main>
</transition>
</template>

<script>
import changeView from "@/mixins/changeView";

export default {
  name: "Home",
  mixins: [changeView],
  data() {
    return {};
  },
  methods: {
    change(e) {
      this.changeView(e, "/projects", "/contact");
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
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  .subhead {
    display: flex;
    flex-direction: column;
    width: 100%;

    .skills {
      h3 {
        text-align: center;
        margin: 1.5rem auto;
        border-bottom: 1px solid;
        padding-bottom: 0.5rem;
        width: 25%;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0 auto;
        width: 100%;

        li {
          margin: 0.3rem 1.5rem;
          font-weight: bold;
        }
      }
    }
  }

  .subtitle {
    width: 100%;
    margin: 0.5rem 0 0;
    h2 {
      font-size: 2.5rem;
      font-weight: 400;
    }
    #me {
      font-family: "Dancing Script", cursive;
      margin-left: 4rem;
      font-size: 3rem;
      font-weight: bold;
    }
  }

  .texts {
    width: 90%;
    margin: 2rem auto;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #5b4422;
  }
}

@include for-tablet {
  .subhead {
    margin-bottom: 4rem;

    .skills {
      margin-top: 2rem;
    }
  }

  .texts {
    line-height: 1.8;
  }
}

@include for-desktop {
  main {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .subhead {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 40%;
      height: 85%;

      .skills {
        h3 {
          text-align: center;
          margin: 0 auto 1.5rem;
          border-bottom: 1px solid;
          padding-bottom: 0.5rem;
          width: 25%;
        }
        ul {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 1.2rem;
          width: 100%;

          li {
            margin: 0 1.5rem;
            font-weight: bold;
          }
        }
      }
    }

    .subtitle {
      width: 40%;
      line-height: 5.5rem;
      margin: 1.5rem 0 0 3rem;
      h2 {
        font-size: 76px;
        font-weight: 400;
      }
      #me {
        font-family: "Dancing Script", cursive;
        margin-left: 7rem;
        font-size: 82px;
        font-weight: bold;
      }
    }

    .texts {
      width: 50%;
      font-size: 1.2rem;
      line-height: 1.8;
      align-self: center;
      color: #5b4422;
    }
  }
}
</style>
