<template>
<div class="wrapper">
  <header>
    <router-link to="/">
      <h2 class="logo">Thomi K.</h2>
    </router-link>
    <router-link v-if="screen > 1024" to="/contact"><button>Contact Me !</button></router-link>
    <button v-if="screen < 1024" @click="showNav = true"><i class="fas fa-bars"></i></button>
  </header>
  <aside>
    <SideView v-if="screen > 1024" />
  </aside>
  <div>
    <router-view />
  </div>
  <div class="modal" v-if="showNav">
    <header>
      <h2 class="logo">Thomi K.</h2>
      <button @click="showNav = false"><i class="fas fa-times"></i></button>
    </header>
    <nav>
      <ul>
        <li @click="changePage">Home</li>
        <li @click="changePage">Projects</li>
        <li @click="changePage">About</li>
        <li @click="changePage">Contact</li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
import SideView from "@/components/SideView";
export default {
  components: {
    SideView,
  },
  data() {
    return {
      screen: window.innerWidth,
      showNav: false,
    };
  },
  methods: {
    changePage(e) {
      let page = e.target.innerText;
      switch (page) {
        case "Home":
          this.$router.push("/");
          break;
        case "Projects":
          this.$router.push("projects");
          break;
        case "About":
          this.$router.push("about");
          break;
        case "Contact":
          this.$router.push("contact");
          break;
      }
      this.showNav = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Damion&family=Dancing+Script:wght@400;700&display=swap");

body {
  font-family: "Castoro", serif;
  height: 100vh;
  color: $textColor;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  padding: 0 5%;
  position: relative;
  height: 100vh;
  background: $mainColor;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    .logo {
      font-family: "Damion", cursive;
    }

    button {
      background: none;
      border: 1px solid $textColor;
      padding: 0.5rem 1rem;
      box-shadow: 0 10px 20px #42928243;
      margin: 0.5rem 1rem 0 0;
      font-family: "Castoro", serif;
      color: $textColor;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: $textColor;
        color: white;
        font-weight: 400;
      }
    }
  }

  aside {
    position: absolute;
    right: 0;
    height: 80vh;
    display: flex;
    align-items: center;
  }

  .modal {
    position: absolute;
    height: 100vh;
    width: 100vw;
    padding: 0 5%;
    background: $mainColor;
    top: 0;
    left: 0;
    z-index: 50;

    nav {
      text-align: center;
      margin: 5rem auto 0;
      height: 50vh;

      ul {
        list-style-type: none;

        li {
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }
      }
    }
  }
  @include for-phone {
    body,
    .wrapper {
      min-height: 100vh;
    }
  }
}
</style>
