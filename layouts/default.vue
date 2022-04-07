<template>
  <div>
    <NavbarHeaderLogo :navigationLinks="navigationLinks" />
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
import config from "../assets/config";

const navigationLinks = config.navigationLinks;

export default {
  name: "default",
  data() {
    return {
      navigationLinks,
    };
  },
};
</script>
