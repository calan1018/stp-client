<template>
  <div id="app">
    <!-- <Top style="text-align: right;" /> -->
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import Top from "./views/layout/components/Top.vue";
import Header from "./views/layout/components/Header.vue";
import Footer from "./views/layout/components/Footer.vue";

export default {
  name: "app",
  components: {
    // Top,
    Header
    // Footer
  },
  created: function() {
    //alert("created");
  },
  mounted: function() {
    //alert("mounted");
  },
  watch: {
    $route: function(to, from) {}
  }
};
</script>
