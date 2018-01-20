<template>
  <div class="card">
    <div class="card-body">
      <h1 class="card-title display-4">{{ event }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 5vh 0 0 0;
  border: 0;
}
</style>

<script>
export default {
  props: ['event']
}
</script>
