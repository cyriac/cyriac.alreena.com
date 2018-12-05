<template>
  <section class="container">
    <div class="card-group">
      <Card src="/img/cover.jpg" class="inv-card-cover" :class="{open: activeCard == 'cover'}" @click.native="cardClick('cover')"/>
      <Card src="/img/mumbai.jpg" class="inv-card-mumbai" :class="{open: activeCard == 'mumbai'}" @click.native="cardClick('mumbai')"/>
      <Card src="/img/kochi.jpg" class="inv-card-kochi" :class="{open: activeCard == 'kochi'}" @click.native="cardClick('kochi')"/>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  data() {
    return {
      activeCard: null
    }
  },
  components: {
    Card
  },
  methods: {
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
.container {
  background: url('/img/vintage.jpg') no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  max-width: 100%;
}
.inv-card-cover, .inv-card-mumbai, .inv-card-kochi {
  max-height: 40vh;
  position: fixed;
  bottom: 10vh;
  left: 10vw;
  transform-origin: bottom center;
  transition-duration: 1s;
  border-radius: 5px !important;
  overflow: hidden !important;
  cursor: pointer;
  &.open {
    left: 40vw;
    max-height: 80vh;
    // z-index: 1001;
    transform: rotate(0);
  }
}
.inv-card-cover {
  z-index: 1000;
  transform: rotate(-10deg);
}
.inv-card-mumbai {
  z-index: 999;
}
.inv-card-kochi {
  z-index: 998;
  transform: rotate(10deg);
}
</style>
