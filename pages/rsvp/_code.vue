<template>
  <no-ssr>
    <div class="mb-5">
      <div class="text-cent mb-5" v-if="src">
        <h1 class="display-1 title">RSVP</h1>
      </div>
      <div class="row" v-if="src">
        <div class="col-12 col-md-8">
          <div class="row">
            <div class="col" v-for="(card, i) in images" :key="i">
              <img :src="card" class="card w-100"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <iframe :src="src" width="640" height="900px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="alert alert-danger">
            Invalid code. <nuxt-link to="/rsvp/" class="btn btn-danger">Try again</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      'src': null,
      'images': []
    }
  },
  mounted() {
    let url = '/rsvpcode/' + this.$route.params.code.split('-')[0] + '.json'
    let self = this
    this.$axios.$get(url).then((res) => {
      self.src = res.url
      self.images = res.cards
    })
  }
}
</script>
