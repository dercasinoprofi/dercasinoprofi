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
          class="col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center"
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
import config from "../../assets/config";

export default {
  name: "slots",
  data() {
    return {};
  },
  async asyncData({ $axios, route }) {
    const provider = route.params.name;
    const limit = config.slots.limit;
    const params = {
      limit,
      provider,
    };
    const data = await $axios.get(config.slotsUrl, { params });
    const games = data.data.slots;
    return {
      games,
    };
  },
};
</script>
