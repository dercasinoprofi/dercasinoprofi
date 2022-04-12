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

<style>
.pageButtons {
  background-color: green;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}
</style>