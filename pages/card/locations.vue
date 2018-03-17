<template>
  <div>
    <div class="row address">
      <div class="col-sm-9 col-12 text-right">
        <img src="/img/church.svg" width="20%"/>
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
      <div class="col-sm-9 col-12 text-right">
        <img src="/img/cake.svg" width="20%"/>
        <address>
          <span>Taj Lands End</span><br/>
          Bandstand Fort, Byramji Jeejeebhoy Road<br />
          Mount Mary, Bandra West, Mumbai<br />
          Maharashtra 400050
        </address>
        <a class="btn btn-sm btn-outline-dark" href="https://goo.gl/maps/iyqXhYxFMyS2" target="_blank">Map</a>
      </div>
    </div>
    <div class="text-center">
      <img src="/img/divider.svg" width="30%" class="divider"/>
    </div>
  </div>
</template>

<style lang="scss">
.btn:hover {
  text-shadow: none;
}
.address {
  span {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
  }
}
.divider {
  margin: 8vh 0 5vh 0;
}
</style>

<script>
export default {
  layout: 'card',
  nav: 'locations'
}
</script>
