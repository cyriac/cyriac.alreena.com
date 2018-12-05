<template>
  <section class="container">
    <div class="card-group">
      <div v-if="!showCards" class="code">
        <form class="form-inline pt-2 pr-2 pl-2">
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
      <Card
        v-else
        v-for="c in cards"
        :key="c"
        :src="'/img/'+c+'-'+code+'.jpg'"
        :class="'inv-card inv-card-'+c+(activeCard === c?' open':'')"
        @click.native="cardClick(c)"/>
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
      cards: ['cover', 'mumbai', 'kochi'],
      code: ''
    }
  },
  components: {
    Card
  },
  methods: {
    displayCards(){
      console.log(this.$route)
      let url = '/img/' + this.cards[0] + '-' + this.code + '.jpg'
      let self = this
      this.$axios.$get(url).then((res) => {
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
.btn-outline-secondary {
  margin-left: -42px;
  border-width: 0;
}
.container {
  background: url('/img/vintage.jpg') no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  max-width: 100%;
}
.inv-card, .code {
  max-height: 40vh;
  position: fixed;
  bottom: 10vh;
  left: 10vw;
  transform-origin: bottom center;
  transition-duration: 1s;
  border-radius: 2px !important;
  overflow: hidden !important;
  cursor: pointer;
  &.open {
    left: 40vw;
    max-height: 80vh;
    // z-index: 1001;
    transform: rotate(0) !important;
  }
}
.card-group {
  .inv-card-cover {
    z-index: 1000;
    transform: rotate(-5deg);
  }
  .inv-card-mumbai {
    z-index: 999;
  }
  .inv-card-kochi {
    z-index: 998;
    transform: rotate(5deg);
  }
  &:hover {
    .inv-card {
      &:hover {
        bottom: 12.5vh;
      }
    }
    .inv-card-cover {
      transform: rotate(-10deg);
    }
    .inv-card-kochi {
      transform: rotate(10deg);
    }
  }
}
</style>
