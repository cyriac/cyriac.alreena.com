<template>
  <div>
    <div class="row address">
      <div class="col-6 col-sm-3 text-left order-1 order-sm-12">
        <img src="/img/church.svg" width="60%"/>
      </div>
      <div class="col-sm-9 col-12 text-right order-12 order-sm-1">
        <address>
          <span>Crypt</span><br/>
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
          <span>Taj Lands End</span><br/>
          Bandstand Fort, Byramji Jeejeebhoy Road<br />
          Mount Mary, Bandra West, Mumbai<br />
          Maharashtra 400050
        </address>
        <a class="btn btn-sm btn-outline-dark" href="https://goo.gl/maps/iyqXhYxFMyS2" target="_blank">Map</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.btn:hover {
  text-shadow: none;
}
.address {
  margin-bottom: 10vh;
  span {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
  }
}
</style>

<script>
export default {
  layout: 'card',
  nav: 'locations'
}
</script>
