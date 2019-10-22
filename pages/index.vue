<template>
  <div class="container">
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div id="section0" class="section">
        <h3>vue-fullpage.js</h3>
      </div>
      <div id="section2" class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div id="section3" class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
    <div id="left"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="bottom"></div>
    <div id="inner"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        navigation: true,
        anchors: ['p1', 'p2', 'p3']
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#inner {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 40px;
  border: 1px solid #000;
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
  background-image: url(https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg1.jpg);
}
#section0 h1 {
  top: 50%;
  transform: translateY(-50%);
  position: relative;
}
#section2 {
  background-image: url(https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg3.jpg);
  padding: 6% 0 0 0;
}
#section3 {
  background-image: url(https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg4.jpg);
  padding: 6% 0 0 0;
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
