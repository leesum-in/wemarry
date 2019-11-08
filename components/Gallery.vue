<template>
  <div id="section3" class="section">
    <div id="slide3-0" class="slide">
      <div class="fp-bg" :style="getSlideStyle(0)"></div>
    </div>
    <div
      v-for="index in 10"
      :id="'slide3-' + index"
      :key="index"
      class="slide slide-poem"
    >
      <div class="fp-bg" :style="getSlideStyle(index)"></div>
      <h5 v-if="getPoem(index)" class="text-box" v-html="getPoem(index)"></h5>
    </div>
  </div>
</template>

<script>
/* eslint-disable spaced-comment */

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

const positions = [
  '70% 80%',
  'center 10%',
  'center 40%',
  'center 10%',
  'center 50%',
  '51% 40%',
  '42% 15%',
  'center 50%',
  '45% 60%',
  'center 70%',
  'center 10%'
]

export default {
  name: 'Gallery',
  props: {
    loadGallery: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    arrowStyle() {
      return {
        position: 'absolute',
        top: '50%',
        right: '5px'
      }
    }
  },
  methods: {
    getSlideStyle(index) {
      if (index === 0 || this.loadGallery) {
        return {
          'background-image': `url(/img/gallery${index}.jpg)`,
          'background-size': 'cover',
          'background-position': positions[index]
        }
      }

      return {}
    },
    getPoem(index) {
      return slidesPoem[index - 1] || ''
    }
  }
}
</script>

<style scoped>
.text-box {
  margin: 40vh auto 0;
}
</style>
