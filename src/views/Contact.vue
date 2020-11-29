<template>
<transition name="fade" appear>
  <section @mousewheel="change" @scroll="change">
    <h1>Contact Me</h1>
    <p>Thank you for stopping by my page! If you have any questions or would like to collaborate, don't hesitate to leave a message.</p>
    <div><a href="mailto:thomskii93@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a><span>thomskii93@gmail.com</span></div>
    <div><a href="https://github.com/tkamilla" target="_blank"><i class="fab fa-github"></i></a><span>github.com/tkamilla</span></div>
    <div><a href="https://www.linkedin.com/in/thomi-kamilla-65226a5b/" target="_blank"><i class="fab fa-linkedin-in"></i></a><span>Thomi Kamilla</span></div>
    <div><a href="https://www.instagram.com/tovetherlife/" target="_blank"><i class="fab fa-instagram"></i></a><span>@tovetherlife</span></div>
    <div><a href="https://www.youtube.com/channel/UCioq2H9ND74G8qnrTCQMYgw" target="_blank"><i class="fab fa-youtube"></i></a><span>@Tovether</span></div>
  </section>
</transition>
</template>

<script>
// @ is an alias to /src
import changeView from "@/mixins/changeView";

export default {
  name: "Home",
  mixins: [changeView],
  methods: {
    change(e) {
      this.changeView(e, "/about", "/");
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.7s ease-in;
}

.fade-enter-from {
  opacity: 0;
}

section {
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  font-size: 1.6rem;

  h1 {
    font-size: 2.2rem;
    text-align: center;
  }

  p {
    width: 52%;
    margin: 3rem auto 3rem;
    color: #5b4422;
    text-align: center;
  }

  a {
    color: inherit;
  }

  i {
    font-size: 2rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  div {
    margin: 1.2rem auto;
    display: flex;
    justify-content: center;
  }

  span {
    margin-left: 1rem;
  }

  @include for-phone {
    text-align: center;
    margin-top: 2.2rem;
    font-size: 1.4rem;
    p {
      width: 100%;
      margin: 2.2rem auto;
      line-height: 1.8;
    }
  }
  @include for-tablet {
    text-align: center;
    margin-top: 2.2rem;
    font-size: 1.6rem;
    p {
      width: 80%;
      margin: 4rem auto 4rem;
      line-height: 1.8;
    }

    div {
      margin: 2.2rem auto;
    }
  }
}
</style>