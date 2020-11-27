<template>
<div class="wrapper">
  <header>
    <h2 id="logo">Thomi K.</h2>
    <router-link to="/contact"><button>Contact Me !</button></router-link>
  </header>
  <aside>
    <SideView />
  </aside>
  <div class="pages">
    <router-view />
  </div>
</div>
</template>

<script>
import SideView from "@/components/SideView";
export default {
  components: {
    SideView,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Damion&family=Dancing+Script:wght@400;700&display=swap");

body {
  font-family: "Castoro", serif;
  background: $mainColor;
  color: $textColor;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.wrapper {
  padding: 0 5%;
  position: relative;
  height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    // border-bottom: 1px solid;
    #logo {
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
      // font-size: 1.1rem;
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

  .pages {
    height: 90vh;
  }
}
</style>
