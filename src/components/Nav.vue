<template>
<div class="header">
  <nav>
    <h2>Thomi K.</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  display: flex;
  nav {
    padding: 0 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-family: "Kaushan Script", cursive;
      font-size: 1.6rem;
      line-height: 2rem;
    }
    ul {
      list-style-type: none;
      width: 33.33%;
      display: flex;
      justify-content: space-evenly;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
