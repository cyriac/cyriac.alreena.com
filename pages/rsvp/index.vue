<template>
  <form class="form-inline pt-2 pr-2 pl-2 rsvpcode">
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
</template>

<script>
export default {
  data() {
    return {
      code: ''
    }
  },
  methods: {
    displayCards(){
      this.$router.push('/rsvp/' + this.code + '/')
    }
  }
}
</script>
