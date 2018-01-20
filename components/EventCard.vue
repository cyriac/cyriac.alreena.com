<template>
  <div class="card">
    <img class="card-img-top" v-bind:src="event.bg" />
    <div class="card-body">
      <h1 class="card-title display-4">{{ event.title }}</h1>
      <div class="info">
        <span class="oi oi-calendar"></span>
        <span v-if="event.date">{{ event.date.toLocaleString().split(",")[0] }}</span>
        <span v-else>TBD</span>
      </div>
      <div class="info">
        <span class="oi oi-map"></span>
        <span>{{ event.location }}</span>
      </div>
      <button class="btn btn btn-outline-light rsvp" v-on:click="comingsoon">RSVP</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 0;
  color: #fff;
  border-radius: calc(.25rem - 1px);
  text-shadow: 1px 1px 2px rgba(0,0,0,.3);
  filter: grayscale(100%);

  &:hover, &:active, &:focus {
    transform: scale(1.05);
    filter: grayscale(40%);
    -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
  }

  .card-img-top {
    border-radius: calc(.25rem - 1px);
  }

  .card-body {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    border-radius: calc(.25rem - 1px);
    .info {
      font-size: 14px;
      .oi {
        margin-right: 5px;
      }
    }
    .rsvp {
      position: absolute;
      bottom: 20px;
    }
  }
  .card-title {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>

<script>
const eventData = {
  engagement: {
    'title': "Engagement",
    'bg': '/img/Cheenavala_Fort-kochi.jpg',
    'date': null,
    'location': 'Kochi'
  },
  wedding: {
    'title': "Wedding",
    'bg': '/img/nitish-kadam-34748.jpg',
    'date': new Date('19 Jan 2019'),
    'location': 'Mumbai'
  },
  weddingreception: {
    'title': "Wedding Reception",
    'bg': '/img/vivek-kumar-234486.jpg',
    'data': null,
    'location': 'Kochi'
  }
}

export default {
  props: ['eventKey'],
  methods: {
    comingsoon () {
      alert("RSVP coming soon")
    }
  },
  computed: {
    event () {
      return eventData[this.eventKey]
    }
  }
}
</script>
