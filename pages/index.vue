<template>
  <section class="container">
    <div>
      <Counter/>
    </div>
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Counter
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
