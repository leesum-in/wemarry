<template>
  <div id="section1" class="section">
    <div class="fp-bg"></div>
    <div class="section1-border"></div>
    <div class="section1-border-inner"></div>
    <h2 v-if="name">{{ name }}님</h2>
    <h2>저희 결혼식에 초대합니다</h2>
    <br />
    <h3>
      이수민
      <span style="color: hotpink">♥</span>
      이보희
    </h3>
    <h3 class="save-the-date">
      <p>
        2019.12.14 (토) 오후 1시<br />
        고려대학교 교우회관
      </p>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
#section1 .fp-bg {
  background-image: url(/img/introduction.jpg);
  background-size: cover;
  background-position: center 10%;
  opacity: 0.4;
}

.section1-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 5px solid #1d2c46;
}

.section1-border-inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 10px;
  border: 1px solid #1d2c46;
}

.save-the-date {
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 10px 0;
  color: #1d2c46;
}

.save-the-date a {
  text-decoration: none;
  color: #2f5a85;
  font-weight: bold;
}

@media screen and (max-width: 320px) {
  h2 {
    font-size: 1.4em;
  }
}
</style>
