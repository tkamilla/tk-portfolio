export default {
  methods: {
    changeView(e, up, down) {
      const scrollDown = e.deltaY > 10;
      scrollDown ? this.$router.push(down) : this.$router.push(up);
    },
  },
};
