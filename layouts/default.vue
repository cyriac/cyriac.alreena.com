<template>
  <div class="container">
    <Logo />
    <nuxt />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+13px|Playfair+Display&effect=3d|canvas-print');
body, html {
  font-family: 'Montserrat', sans-serif;
}
body {
  background: url('/img/vintage.jpg') no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  max-width: 100%;
  max-height: 100vh;
  overflow-x: hidden;
}
.logo {
  /* margin-left: 10vh; */
  max-width: 300px;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
.card {
  border: 0;
  -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .2);
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .2);
}
form.rsvpcode {
  margin-top: 50vh;
}
form.rsvpcode .btn-outline-secondary {
  margin-left: -42px;
  border-width: 0;
}

</style>
