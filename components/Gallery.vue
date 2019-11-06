<template>
  <div id="section2" class="section">
    <div id="slide2-0" class="slide">
      <div class="fp-bg" :style="getSlideStyle(0)"></div>
      <h2 class="text-bot" @click="$emit('click-gallery')">
        GALLERY&gt;&gt;
      </h2>
    </div>
    <div
      v-for="index in 10"
      :id="'slide2-' + index"
      :key="index"
      class="slide slide-poem"
    >
      <div class="fp-bg" :style="getSlideStyle(index)"></div>
      <h5 v-if="getPoem(index)" class="text-box" v-html="getPoem(index)"></h5>
    </div>
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
  '마음이 오는 것이다',
  '< 정현종 "방문객" 중 >'
]

const verticals = [
  '70%',
  'center',
  'center',
  'center',
  'center',
  '51%',
  '42%',
  'center',
  '45%',
  'center',
  'center'
]

export default {
  name: 'Gallery',
  methods: {
    getSlideStyle(index) {
      return {
        'background-image': `url(/img/gallery${index}.png)`,
        'background-size': 'cover',
        'background-position': `${verticals[index]} 80%`
      }
    },
    getPoem(index) {
      return slidesPoem[index - 1] || ''
    }
  }
}
</script>

<style scoped>
.slide-poem .text-box {
  margin-top: 100px;
}
</style>
