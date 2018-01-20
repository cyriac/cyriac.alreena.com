<template>
  <div class="counter">
    <span class="remaining">{{ remaining }} days</span>
    <nuxt-link to="/save-the-dates" class="date">{{ cdate }}</nuxt-link>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Slabo+27px');
.counter {
  display: block;
  font-size: 5rem;
  color: #AAA;
  font-family: 'Slabo 27px', serif;
  .date {
    display: none
  }
  &:hover, &:focus {
    .date {
      display: inline-block;
      -webkit-text-decoration-skip: ink;
      text-decoration-skip: ink;
      color: #AAA;
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
