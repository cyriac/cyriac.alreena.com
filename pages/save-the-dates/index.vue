<template>
  <div class="row no-gutters">
    <div class="col-12 col-md-6 heading">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="display-1">Save the dates</h1>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 cards">
      <div class="row justify-content-center">
        <div class="col-8">
          <EventCard :event="'engagement'"/>
        </div>
        <div class="col-8">
          <EventCard :event="'wedding'"/>
        </div>
        <div class="col-8">
          <EventCard :event="'wedding-reception'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  min-height: 100vh;
}
.heading {
  background: #f1f1f1;
}
.cards {
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
