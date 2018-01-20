<template>
  <div class="row no-gutters">
    <div class="col-12 col-md-6 heading">
      <div class="row">
        <div class="col-12">
          <h1 class="display-3">Save the dates</h1>
          <span class="d-block d-md-none scroll">
            <span class="oi oi-chevron-bottom"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 cards">
      <div class="row justify-content-center">
        <div class="col-11 col-md-8">
          <EventCard :eventKey="'engagement'"/>
        </div>
        <div class="col-12"><hr class="invisible"/></div>
        <div class="col-11 col-md-8">
          <EventCard :eventKey="'wedding'"/>
        </div>
        <div class="col-12"><hr class="invisible"/></div>
        <div class="col-11 col-md-8">
          <EventCard :eventKey="'weddingreception'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  min-height: 100vh;
}
.cards {
  background: #f1f1f1;
  position: absolute;
  width: 50%;
  right: 0;
  padding: 5vh 0;
}
.heading {
  background: #f1f1f1 url(/img/IMG_3379.jpg);
  background-size: cover;
  position: fixed;
  width: 50%;
  left: 0;
  text-align: center;
  color: #fff;
  height: 100vh;
  text-shadow: 1px 1px 2px rgba(0,0,0,.3);
  h1 {
    width: 95%;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    padding: 0 20px 50px;
  }
  .scroll {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.cards, .heading {
  @media (max-width: 769px) {
    position: static;
    width: 100%;
  }
}
</style>

<script>
import EventCard from '~/components/EventCard.vue'

export default {
  components: {
    EventCard
  }
}
</script>
