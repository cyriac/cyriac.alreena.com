<template>
  <form class="form-inline pt-2 pr-2 pl-2 rsvpcode">
    <div class="form-group mb-2">
      <label for="staticCode" class="sr-only">Code</label>
      <input
        type="text"
        class="form-control form-control-lg"
        id="staticCode"
        placeholder="Code"
        v-model="code"
        autofocus>
    </div>
    <button type="submit" class="btn btn-outline-secondary mb-2" @click.stop.prevent="displayCards">⏎</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      code: this.$store.state.access_code
    }
  },
  mounted() {
    if (this.code.length > 0) {
      this.displayCards()
    }
  },
  methods: {
    displayCards(){
      this.$router.push('/rsvp/' + this.code + '/')
    }
  }
}
</script>
