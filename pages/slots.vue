<template>
  <div>
    <div class="container mt-5 px-4">
      <!-- <div class="row">
        <div class="col-md-12 text-center">
          <div class="h2"><span class="bigRedText"> Neue Slots </span></div>
        </div>
      </div> -->

      <div class="row pt-2">
        <div
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center"
          v-for="(game, id) in games"
          :key="id"
        >
          <Game :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../assets/config";

export default {
  name: "slots",
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    const data = await $axios.get(config.slotsUrl);
    const games = data.data.slots;
    console.log(games);
    return {
      games,
    };
  },
};
</script>
