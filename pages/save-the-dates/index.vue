<template>
  <div class="container">
    <div class="row justify-content-lg-start justify-content-sm-center">
      <div class="col-12 col-sm-8 col-lg-4">
        <div class="jumbotron p-4 bg-white">
          <div class="col-md-12 px-0">
            <h1 class="display-4">Save the dates</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-lg-start justify-content-sm-center">
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :eventKey="'engagement'"/>
      </div>
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :eventKey="'wedding'"/>
      </div>
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :eventKey="'weddingreception'"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.jumbotron {
  border: 10px solid #000;
  border-radius: 0 !important;
  text-transform: uppercase;
}
.card {
  margin-bottom: 5vh;
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
