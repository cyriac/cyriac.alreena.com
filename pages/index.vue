<template>
  <section>
    <div v-if="!showCards" class="code">
      <form class="form-inline pt-2 pr-2 pl-2 rsvpcode">
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input
            type="text"
            class="form-control"
            id="staticEmail2"
            placeholder="Code"
            v-model="code"
            autofocus>
        </div>
        <button type="submit" class="btn btn-outline-secondary mb-2" @click.stop.prevent="displayCards">⏎</button>
      </form>
    </div>
    <div class="card-group" v-if="showCards">
      <Card
        v-for="(c, i) in cards"
        :key="i"
        :src="c"
        :class="'inv-card inv-card-'+String(i)+(activeCard === c?' open':'')"
        @click.native="cardClick(c)"/>
        <nuxt-link class="btn btn-primary btn-rsvp" :to="'/rsvp/'+code">RSVP</nuxt-link>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  data() {
    return {
      showCards: false,
      activeCard: null,
      cards: ['/img/cover.jpg'],
      code: ''
    }
  },
  components: {
    Card
  },
  methods: {
    displayCards(){
      let url = '/rsvpcode/' + this.code + '.json'
      let self = this
      this.$axios.$get(url).then((res) => {
        res.cards.forEach(c => {
          self.cards.push(c)
        })
        self.showCards = true
      })
    },
    cardClick(card) {
      if (this.activeCard === card) {
        this.activeCard = null
      } else {
        this.activeCard = card
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  max-height: 100vh;
}
.inv-card, .btn-rsvp {
  max-height: 40vh;
  position: fixed;
  bottom: 20vh;
  left: 10vw;
  transform-origin: bottom center;
  transition-duration: 1s;
  border-radius: 2px !important;
  overflow: hidden !important;
  cursor: pointer;
  &.open {
    bottom: 10vh;
    left: 40vw;
    max-height: 80vh;
    // z-index: 1001;
    transform: rotate(0) !important;
  }
}
.btn-rsvp {
  bottom: 10vh;
  left: 27.5vh;
}
.card-group {
  .inv-card-0 {
    z-index: 1000;
    transform: rotate(-5deg);
  }
  .inv-card-1 {
    z-index: 999;
  }
  .inv-card-2 {
    z-index: 998;
    transform: rotate(5deg);
  }
  &:hover {
    .inv-card {
      &:hover {
        bottom: 22.5vh;
      }
    }
    .inv-card-0 {
      transform: rotate(-10deg);
    }
    .inv-card-2 {
      transform: rotate(10deg);
    }
  }
}
</style>
