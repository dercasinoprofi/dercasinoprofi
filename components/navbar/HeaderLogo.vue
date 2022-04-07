<template>
  <div>
    <div class="container-fluid pt-2 pb-2">
      <div class="text-center">
        <a class="navbar-brand" href="#">
          <img
            src="~/assets/images/logo/logo.png"
            :alt="config.siteName"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-custom container roundCorners">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            class="navbar-nav"
            v-for="(link, index) in config.navigationLinks"
            :key="index"
          >
            <li class="nav-item text-light fw-bold">
              <nuxt-link
                class="nav-link active removeLink"
                aria-current="page"
                :to="link.url"
                :title="link.title"
                >{{ link.name }}</nuxt-link
              >
            </li>
          </ul>

          <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import config from "../../assets/config";

export default {
  name: "headerlogo",
  props: ["navigationLinks"],
  data() {
    return {
      config,
    };
  },
};
</script>

<style scoped>
/* Modify the background color */
.navbar-custom {
  background-color: green;
}

.link-unstyled,
.link-unstyled:link,
.link-unstyled:hover {
  color: inherit;
  text-decoration: inherit;
}

.removeLink {
  color: inherit;
  text-decoration: inherit;
}

.roundCorners {
  border-radius: 5px;
}
</style>