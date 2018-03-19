<template>
  <div class="card">
    <img class="card-img-top" v-bind:src="event.bg" />
    <div class="card-body">
      <h1 class="card-title display-4">{{ event.title }}</h1>
      <div class="info">
        <span class="oi oi-calendar"></span>
        <span>{{ event.date.toLocaleString().split(",")[0] }}</span>
      </div>
      <div class="info">
        <span class="oi oi-map"></span>
        <span>{{ event.location }}</span>
      </div>
      <button class="btn btn btn-outline-light rsvp" v-on:click="comingsoon" v-if="!event.link">RSVP</button>
      <nuxt-link to="/card/" class="btn btn btn-outline-light rsvp" v-else>CARD</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 0;
  color: #fff;
  border-radius: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,.3);
  filter: grayscale(100%);

  &:hover, &:active, &:focus {
    transform: scale(1.05);
    filter: grayscale(0%);
    -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .6);
  }

  .card-img-top {
    border-radius: 0;
  }

  .card-body {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
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
.btn {
  border-radius: 0;
}
</style>

<script>
export default {
  props: ['event'],
  methods: {
    comingsoon () {
      alert("RSVP coming soon")
    }
  }
}
</script>
