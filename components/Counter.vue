<template>
  <div class="counter">
    <span class="remaining font-effect-3d">{{ remaining }} days</span>
    <nuxt-link to="/save-the-dates" class="date font-effect-3d">{{ cdate }}</nuxt-link>
  </div>
</template>

<style lang="scss">
.counter {
  display: block;
  font-size: 5rem;
  font-weight: 800;
  color: #FFF;
  font-family: 'Slabo 13px', serif;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, .5);
  .date {
    display: none
  }
  &:hover, &:focus {
    .date {
      display: inline-block;
      text-decoration: none;
      color: #FFF;
    }
    .remaining {
      display: none;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      'date': new Date('19 Jan 2019')
    }
  },
  computed: {
    cdate() {
      return this.date.toLocaleString().split(",")[0]
    },
    remaining() {
      let today = new Date()
      let oneday = 1000 * 60 * 60 * 24
      let datediff = this.date.getTime() - today.getTime()
      let remaining = Math.round(datediff / oneday)
      return Math.max(0, remaining)
    }
  }
}
</script>
