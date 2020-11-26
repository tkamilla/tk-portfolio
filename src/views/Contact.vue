<template>
<main @mousewheel="change">
  Contact me now!
</main>
</template>

<script>
// @ is an alias to /src
import changeView from "@/mixins/changeView";

export default {
  name: "Home",
  mixins: [changeView],
  data() {
    return {};
  },
  methods: {
    change(e) {
      this.changeView(e, "/about", "/");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  border: 1px solid red;
  height: 100%;
}
</style>