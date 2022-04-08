<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4 pt-5">
          <div class="card" style="width: 18rem">
            <img
              :src="`~/assets/images/anbieter/${casinos.stargames.logo}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ casinos.stargames.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-4 pt-5">
          <div class="card" style="width: 18rem">
            <img
              :src="`~/assets/images/anbieter/${casinos.quasargaming.logo}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ casinos.quasargaming.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-4 pt-5">
          <div class="card" style="width: 18rem">
            <img
              src="~/assets/images/anbieter/casinoclub.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ casinos.casinoclub.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import casinos from "../../assets/casinos";
console.log(casinos.stargames.logo);

export default {
  name: "featurelinks",
  data() {
    return {
      casinos,
    };
  },
};
</script>
