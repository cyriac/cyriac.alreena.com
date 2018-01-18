<template>
  <div class="counter">
    <span class="remaining">{{ remaining }} days</span>
    <span class="date">{{ cdate }}</span>
  </div>
</template>

<style lang="scss">
.counter {
  display: block;
  font-size: 5rem;
  color: #AAA;
  span {
    cursor: wait;
  }
  .date {
    display: none
  }
  &:hover, &:focus {
    .date {
      display: inline-block;
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
      return Math.round((this.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    }
  }
}
</script>
