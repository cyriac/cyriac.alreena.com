<template>
  <img :src="src" class="card"/>
</template>

<script>
export default {
  props: ['src']
}
</script>


<style lang="scss">
.card {
  border-radius: 5px;
}
</style>
