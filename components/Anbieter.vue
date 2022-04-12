<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-4 pt-5"
          v-for="(provider, index) in providers"
          :key="index"
        >
          <div class="card">
            <nuxt-link
              :to="`/provider/${provider.key}/1/`"
              :title="provider.name"
            >
              <img
                :src="`/images/provider/${provider.logo}`"
                class="card-img-top"
                alt="..."
              />
            </nuxt-link>
            <div class="card-body">
              <h5 class="card-title">
                <nuxt-link
                  :to="`/provider/${provider.key}/1/`"
                  :title="provider.name"
                  >{{ providers.name }}</nuxt-link
                >
              </h5>
              <p class="card-text h6">
                {{ provider.subline }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import config from "../assets/config";
const providers = config.provider.filter((x) => x.publish === true);

export default {
  name: "providerComponent",
  data() {
    return {
      providers,
    };
  },
};
</script>


<style scoped>
.topCasinoImage {
  margin: 20px;
  vertical-align: middle;

  padding: 50px;
}

.subline {
}
</style>