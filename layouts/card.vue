<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-lg-8 col-md-10 col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-9 col-12 text-right">
                <img src="/img/leaf.svg" width="20%" class="leaf"/>
              </div>
            </div>
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Slabo+13px|Playfair+Display');
img {
  &.leaf {
    margin: 20vh 0 10vh 0;
  }
}
.card {
  margin: 3vh;
  border: 3vh solid #555;
  border-radius: 0;
  text-shadow: 0 1px 1px #fff, 0 0 0.5px rgba(0,0,0,.5);
  font-family: 'Playfair Display', serif;
  background: #F3ECE2;
  .card-body {
    min-height: 100vh;
    color: #555;
  }
}
.names, .dates {
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 3rem;
  font-weight: bold;
  margin: 3vh 0;
  font-style: normal
}
.dates {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 3vh 0;
}
.amp {
  font-weight: normal;
  font-size: 6rem;
  line-height: 5.5rem;
}
</style>
