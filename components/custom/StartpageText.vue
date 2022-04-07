<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="fs-1 pt-5 text-center">TEST</div>
        <div class="fs-5 pt-5" v-html="content.startpageText"></div>
      </div>
    </div>
  </div>
</template>

<script>
import content from "../../assets/content";
export default {
  name: "startpagetext",
  data() {
    return {
      content,
    };
  },
};
</script>
