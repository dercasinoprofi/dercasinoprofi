<template>
  <div>
    <SliderHeaderSliderControls />

    <Games :games="games" />

    <CustomFeatureLinks />

    <CustomTopCasinos />

    <CustomStartpageText />

    <!-- <CardsCard /> -->
    <!-- <CardsGroup /> -->
    <!-- <CardsHorizontal /> -->
  </div>
</template>

<script>
import config from "../assets/config";

export default {
  name: "IndexPage",
  async asyncData({ $axios }) {
    const numberOfSlots = config.slots.numberOfSlots;
    const params = {
      limit: numberOfSlots,
      skip: 0,
    };
    const data = await $axios.get(config.slotsUrl, { params });
    const games = data.data.slots;
    return {
      games,
    };
  },
};
</script>
