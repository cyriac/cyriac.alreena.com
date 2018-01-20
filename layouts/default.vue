<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+13px');
body, html {
  font-family: 'Montserrat', sans-serif;
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
</style>
