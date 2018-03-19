<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-lg-2 col-md-1 col-12 text-right order-1">
        <nuxt-link to="/card/" class="btn btn-dark btn-nav" v-if="nav=='locations'">
          <span class="oi oi-calendar"></span>
        </nuxt-link>
      </div>
      <div class="col-lg-8 col-md-10 col-12 order-3 order-sm-2">
        <div class="card">
          <div class="card-body font-effect-canvas-print">
            <nuxt />
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-1 col-12 order-2 order-sm-3">
        <nuxt-link to="/card/locations/" class="btn btn-dark btn-nav" v-if="nav=='calendar'">
          <span class="oi oi-map"></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+13px|Playfair+Display&effect=font-effect-3d|canvas-print');
.btn-nav {
  margin: 3vh 0;
  border-radius: 0;
  background-color: #555;
}
img {
  margin: 20vh 0 5vh 0;
}
.card {
  margin: 3vh 0;
  border: 3vh solid #555;
  border-radius: 0;
  text-shadow: 0 1px 1px #fff, 0 0 0.5px rgba(0,0,0,.5);
  font-family: 'Playfair Display', serif;
  background: #F3ECE2;
  -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
  .card-body {
    min-height: 100vh;
    color: #555;
  }
}
.names, .dates {
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 3rem;
  font-weight: bold;
  margin: 3vh 0;
  font-style: normal
}
.dates {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 3vh 0;
}
.amp {
  font-weight: normal;
  font-size: 6rem;
  line-height: 5.5rem;
}
</style>


<script>
export default {
  computed: {
    nav () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.nav : r.components.default.nav)
      })[0]
    },
  },
}
</script>
