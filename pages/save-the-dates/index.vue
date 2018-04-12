<template>
  <div class="container">
    <div class="row justify-content-lg-start justify-content-sm-center">
      <div class="col-12 col-sm-8 col-lg-4">
        <nuxt-link to="/" class="jumbotron p-4">
          <div class="col-md-12 px-0">
            <h1 class="display-4">Save the dates</h1>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="row justify-content-lg-start justify-content-sm-center">
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :event='eventData["engagement"]' />
      </div>
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :event='eventData["wedding"]' />
      </div>
      <div class="col-12 col-sm-8 col-lg-4">
        <EventCard :event='eventData["weddingreception"]' />
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
  display: block;
  color: #333;
  background: #FFF;
  text-decoration: none!important;
  &:hover, &:active, &:focus {
    background: #000;
    color: #FFF;
  }
}
.card {
  margin-bottom: 5vh;
}
</style>

<script>
import EventCard from '~/components/EventCard.vue'

const eventData = {
  engagement: {
    'title': "Engagement",
    'bg': '/img/Cheenavala_Fort-kochi.jpg',
    'date': new Date('19 Aug 2018'),
    'location': 'Kochi',
    'link': null
  },
  wedding: {
    'title': "Wedding",
    'bg': '/img/nitish-kadam-34748.jpg',
    'date': new Date('19 Jan 2019'),
    'location': 'Mumbai',
    'link': null
  },
  weddingreception: {
    'title': "Wedding Reception",
    'bg': '/img/vivek-kumar-234486.jpg',
    'date': new Date('26 Jan 2019'),
    'location': 'Kochi',
    'link': null
  }
}

export default {
  data () {
    return {
      'eventData': eventData
    }
  },
  components: {
    EventCard
  }
}
</script>
