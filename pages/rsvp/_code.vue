<template>
  <no-ssr>
    <div class="mb-5">
      <div class="row" v-if="error">
        <div class="col-md-8">
          <div class="alert alert-danger">
            Invalid code. <nuxt-link to="/rsvp/" class="btn btn-danger">Try again</nuxt-link>
          </div>
        </div>
      </div>
      <div class="text-cent mb-5" v-if="src">
        <h1 class="display-1 title">RSVP</h1>
      </div>
      <div class="row" v-if="src">
        <div :class="cardWrapperClasses" v-for="(card, i) in images" :key="i">
          <img :src="card" class="card w-100 mb-5"/>
        </div>
        <div class="col">
          <iframe :src="src" width="100%" height="900px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
      'images': [],
      'error': false
    }
  },
  computed: {
    cardWrapperClasses() {
      let cls = ''
      if (this.src !== null) {
        if (this.images.length == 2) {
          cls = 'col-12 col-sm-4'
        } else {
          cls = 'col-12 col-sm-6'
        }
      }
      return cls
    }
  },
  mounted() {
    let code = this.$route.params.code.split('-')[0]
    let url = '/rsvpcode/' + code + '.json'
    let self = this
    this.$axios.$get(url).then((res) => {
      self.src = res.url
      self.images = res.cards
      self.$store.commit('setCode', code)
    }).catch(error => {
      this.error = true
    });
  }
}
</script>
