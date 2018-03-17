<template>
  <div class="row justify-content-md-center">
    <div class="col-lg-6 col-md-11 col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-9 col-12 text-right">
              <img src="/img/leaf.svg" width="20%"/>
              <div>with their families</div>
            </div>
          </div>
          <div class="names">
            <div class="row">
              <div class="col-sm-9 col-12 text-right">
                <div class="name">Alreena <span class="d-none d-sm-inline">Pinto</span></div>
                <div class="d-block d-sm-none"><span class="amp">&</span></div>
                <div class="name">Cyriac <span class="d-none d-sm-inline">Thomas</span></div>
              </div>
              <div class="col-sm-3 text-left d-none d-sm-block">
                <span class="amp">&</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-9 col-12 text-right">
              will exchange their vows
            </div>
          </div>
          <div class="row">
            <div class="col-sm-9 col-12 text-right">
              <div class="dates">JANUARY 19 2019 • 17:30 PM</div>
              <div>don bosco crypt • mumbai</div>
              <div>reception to follow</div>
              <div>taj lands end • mumbai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin: 3vh;
  border: 3vh solid #555;
  font-style: italic;
  border-radius: 0;
  text-shadow: 0 1px 1px #fff, 0 0 0.5px rgba(0,0,0,.5);
  font-family: 'Playfair Display', serif;
  background: #F3ECE2;
  .card-body {
    min-height: 100vh;
    color: #555;
    img {
      margin: 10vh 0;
    }
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
