<template>
  <div class="container">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
      class="fp-auto-height-responsive"
    >
      <div id="section0" class="section">
        <div>
          <h1 class="text-box">{{ $route.params.name }} 님</h1>
          <h1 class="text-box">저희 결혼식에 초대합니다</h1>
          <br />
          <h3 class="text-box">
            이수민
            <span style="color: hotpink">♥</span>
            이보희
          </h3>
        </div>
      </div>
      <div id="section1" class="section">
        <div>
          <h1 class="text-box">{{ $route.params.name }} 님</h1>
          <h1 class="text-box">저희 결혼식에 초대합니다</h1>
          <br />
          <h3 class="text-box">
            이수민
            <span style="color: hotpink">♥</span>
            이보희
          </h3>
        </div>
      </div>
      <div id="section2" class="section">
        <div>
          <h1 class="text-box">{{ $route.params.name }} 님</h1>
          <h1 class="text-box">저희 결혼식에 초대합니다</h1>
          <br />
          <h3 class="text-box">
            이수민
            <span style="color: hotpink">♥</span>
            이보희
          </h3>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        navigation: false,
        responsiveHeight: 410,
        responsiveWidth: 200,
        licenseKey: '6FA7605F-5A804CBF-B02D5636-DC599F82'
      }
    }
  },
  middleware({ router, params }) {
    if (!params.name) {
      router.push({ path: '/' })
    }
  }
}
</script>

<style>
#inner {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 2rem;
  border: 1px solid #1d2c46;
}
#top,
#bottom,
#left,
#right {
  background: #1d2c46;
  position: fixed;
}
#left,
#right {
  top: 0;
  bottom: 0;
  width: 25px;
}
#left {
  left: 0;
}
#right {
  right: 0;
}

#top,
#bottom {
  left: 0;
  right: 0;
  height: 25px;
}
#top {
  top: 0;
}
#bottom {
  bottom: 0;
}

.text-box {
  background: rgba(255, 255, 255, 0.4);
  width: fit-content;
  margin: 3px auto;
  padding: 5px;
}

/* Centered texts in each section
* --------------------------------------- */
.section {
  text-align: center;
}

/* Backgrounds will cover all the section
* --------------------------------------- */
.section {
  background-size: cover;
}

.slide {
  background-size: cover;
}

/* Defining each sectino background and styles
* --------------------------------------- */
#section0 {
  background-image: url(/img/DSC00016_resize.jpg);
  background-position: center;
}

#section1 {
  background-image: url(/img/DSC00701_resize.jpg);
  background-position: center;
}

#section2 {
  background-image: url(/img/DSC00464_resize.jpg);
  background-position: center;
}
#section3 {
  background-image: url(/img/DSC00562_resize.jpg);
  background-position: center;
}
#section3 h1 {
  color: #000;
}

/*Adding background for the slides
* --------------------------------------- */
#slide1 {
  background-image: url(https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg2.jpg);
  padding: 6% 0 0 0;
}
#slide2 {
  background-image: url(https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg5.jpg);
  padding: 6% 0 0 0;
}
</style>
