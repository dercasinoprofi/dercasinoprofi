<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="(game, index) in games" :key="index">
          <Game :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gamesComponent",
  props: ["games"],
};
</script>

</script>


