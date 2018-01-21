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

<style scoped>
.container {
  background: url('/img/pexels-photo-273941.jpg') no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100%;
}
</style>
