<template>
  <div>
    <div class="row address">
      <div class="col-6 col-sm-3 text-left order-1 order-sm-12">
        <img src="/img/church.svg" width="60%"/>
      </div>
      <div class="col-sm-9 col-12 text-right order-12 order-sm-1">
        <address>
          Crypt<br/>
          Shrine Of Don Bosco's Madonna<br />
          Matunga, Mumbai<br />
          Maharashtra - 400019
        </address>
        <a class="btn btn-sm btn-outline-dark" href="https://goo.gl/maps/KnPfCLkyhmH2" target="_blank">Map</a>
      </div>
    </div>
    <div class="row address">
      <div class="col-6 col-sm-3 text-left order-1 order-sm-12">
        <img src="/img/cake.svg" width="60%"/>
      </div>
      <div class="col-sm-9 col-12 text-right order-12 order-sm-1">
        <address>
          Taj Lands End<br/>
          Bandstand Fort, Byramji Jeejeebhoy Road<br />
          Mount Mary, Bandra West, Mumbai<br />
          Maharashtra 400050
        </address>
        <a class="btn btn-sm btn-outline-dark" href="https://goo.gl/maps/iyqXhYxFMyS2" target="_blank">Map</a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <nuxt-link to="/card/">
          <span class="oi oi-calendar"></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.btn:hover {
  text-shadow: none;
}
.address {
  margin: 10vh 0;
}
/* .map {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  &:hover {
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    filter: grayscale(0%);
  }
} */
</style>

<script>
export default {
  layout: 'card'
}
</script>
