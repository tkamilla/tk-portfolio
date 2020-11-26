<template>
<div class="wrapper">
  <header>
    <h2 id="logo">Thomi K.</h2>
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

.wrapper {
  padding: 0 5%;
  position: relative;
  height: 100vh;

  header {
    display: flex;
    align-items: center;
    height: 10vh;
    #logo {
      font-family: "Damion", cursive;
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
