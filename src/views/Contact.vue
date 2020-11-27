<template>
<transition name="fade" appear>
  <section @mousewheel="change">
    <h1>Contact Me</h1>
    <p>Thank you for stopping by my page! If you have any questions or would like to collaborate, don't hesitate to leave a message.</p>
    <div><a href="mailto:thomskii93@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a><span>thomskii93@gmail.com</span></div>
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
  // transform: translateY(3px);
  opacity: 0;
}

section {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // text-align: center;
  font-size: 1.4rem;

  h1 {
    font-size: 2.2rem;
    text-align: center;
  }

  p {
    width: 52%;
    margin: 4rem auto 4rem;
    color: #5b4422;
  }

  a {
    color: inherit;
    // flex: 1;
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
    // width: 25%;
  }

  span {
    margin-left: 1rem;
    // color: #5b4422;
  }
}
</style>