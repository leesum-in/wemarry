<template>
  <div class="container">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
      class="fp-auto-height-responsive"
    >
      <div id="section0" class="section">
        <div class="fp-bg"></div>
        <h2 v-if="name">{{ name }}님</h2>
        <h2>저희 결혼식에 초대합니다</h2>
        <br />
        <h3>
          이수민
          <span style="color: hotpink">♥</span>
          이보희
        </h3>
        <h3 class="save-the-date">
          2019.12.14 (토) 오후 1시<br />
          고려대학교 교우회관
        </h3>
        <div class="section0-border"></div>
        <div class="section0-border-inner"></div>
      </div>
      <div id="section1" class="section">
        <div class="fp-bg"></div>
        <p class="text-box">평생을 같이하고 싶은 사람을 만났습니다.</p>
        <p class="text-box">아껴주고 이해하며 사랑하고 살겠습니다.</p>
        <p class="text-box">
          저희의 약속 위에 따뜻한 격려로 축복해주십시오.
        </p>
        <div>
          <ul class="greeting-name">
            <li class="groom">
              <h3>신랑 <strong>이수민</strong></h3>
              <h5>이승삼ㆍ이미자의 장남</h5>
            </li>
            <li class="bride">
              <h3>신부 <strong>이보희</strong></h3>
              <h5>이규석ㆍ김수옥의 차녀</h5>
            </li>
          </ul>
        </div>
      </div>
      <div id="section2" class="section">
        <div
          v-for="index in 10"
          :id="'slide2-' + index"
          :key="index"
          class="slide"
        >
          <div class="fp-bg" :style="getSlideStyle(index)"></div>
          <h5
            v-if="getPoem(index)"
            class="text-box"
            v-html="getPoem(index)"
          ></h5>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
const slidesPoem = [
  '사람이 온다는 것은',
  '실은 어마어마한 일이다.',
  '그는',
  '그의 과거와 현재와',
  '그리고',
  '그의 미래와 함께 오기 때문이다.',
  '한 사람의 일생이 오기 때문이다.',
  '부서지기 쉬운 그래서 부서지기도 했을',
  '마음이 오는 것이다'
]
export default {
  name: 'Index',
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      options: {
        navigation: false,
        licenseKey: '6FA7605F-5A804CBF-B02D5636-DC599F82',
        controlArrows: false,
        parallax: true,
        parallaxKey: 'd2VtYXJyeS5pbl9LTThjR0Z5WVd4c1lYZz05MUk=',
        parallaxOptions: {
          type: 'reveal'
        }
      }
    }
  },
  methods: {
    getSlideStyle(index) {
      return {
        'background-image': `url(/img/slide/${index}.jpg)`,
        'background-size': 'cover',
        'background-position': 'center 80%'
      }
    },
    getPoem(index) {
      return slidesPoem[index - 1] || ''
    }
  }
}
</script>

<style type="scss">
.text-box {
  background: rgba(255, 255, 255, 0.5);
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

.bottom {
  bottom: 30%;
  position: relative;
}

/* Defining each sectino background and styles
  * --------------------------------------- */
#section0 .fp-bg {
  background-image: url(/img/DSC00101_resize.jpg);
  background-size: cover;
  background-position: center 80%;
  opacity: 0.4;
}

.section0-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 15px solid #1d2c46;
}

.section0-border-inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 20px;
  border: 1px solid #1d2c46;
}

.save-the-date {
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 10px 0;
  color: #1d2c46;
  //background: rgba(0, 0, 0, 0.1);
}

#section1 .fp-bg {
  background-image: url(/img/DSC00016_resize.jpg);
  background-size: cover;
  background-position: 49% 80%;
}

ul,
ol,
li,
dl {
  list-style: none;
}
.greeting-name {
  margin: 40px auto;
  color: #444;
  width: 90%;
  max-width: 480px;
  min-width: 290px;
  box-sizing: border-box;
  padding: 0;
}
.greeting-name li {
  text-align: center;
  float: left;
  width: 49%;
  background: rgba(255, 255, 255, 0.5);
  margin-right: 1%;
  padding: 10px;
}
.greeting-name:after {
  display: block;
  content: '';
  clear: both;
}
</style>
