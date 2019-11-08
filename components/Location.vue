<template>
  <div id="section5" class="section">
    <div class="fp-bg"></div>
    <h3 class="text-box">오시는 길</h3>
    <div class="location-name">
      <a href="https://place.map.kakao.com/17565864" target="_blank">
        고려대학교 교우회관 1층
        <img src="/img/link-icon.png" />
      </a>
      <small>서울특별시 성북구 종암로 13</small>
    </div>
    <div class="map-container normal-scroll">
      <vue-daum-map
        style="width:100%;height:100%;"
        app-key="39fb6841e2a5abf0dba1a4fbea9e3164"
        :center.sync="mapOptions.center"
        :level.sync="mapOptions.level"
        :map-type-id="mapOptions.mapTypeId"
        :libraries="mapOptions.libraries"
        :draggable="mapOptions.draggable"
        @load="onLoad"
      />
    </div>
    <h4 class="subway-info text-box">
      <span class="subway-6">고려대역</span> 2번 출구에서 도보로 5분
    </h4>
    <div class="bus-info">
      <div class="bus-info-head">
        부산에서 오시는 분들
      </div>
      <div class="bus-info-content">
        <p>오전 6시 40분 | <strong>광안동 비치그린아파트 정문 앞</strong></p>
        <p>
          오전 7시 | <strong>한양 프라자 앞(1호선 "교대역" 8번 출구)</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Location',
  data() {
    return {
      mapOptions: {
        center: { lat: 37.592062, lng: 127.035656 },
        level: 4,
        mapTypeId: 1,
        libraries: ['services', 'drawing'],
        draggable: true
      },
      map: null,
      marker: null
    }
  },
  methods: {
    onLoad(map) {
      this.map = map
      this.drawMarker()
    },
    drawMarker() {
      this.marker = new window.kakao.maps.Marker({
        map: this.map,
        position: new window.kakao.maps.LatLng(
          this.mapOptions.center.lat,
          this.mapOptions.center.lng
        )
      })
    }
  }
}
</script>

<style scoped>
#section5 .fp-bg {
  background-image: url(/img/location.jpg);
  background-size: cover;
  background-position: 63% 10%;
}
.map-container {
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  height: 200px;
  opacity: 0.8;
  border: 1px solid #1d2c46;
}
.location-name {
  width: 90%;
  margin: 15px auto;
}

.location-name a {
  font-weight: bold;
  color: #1d2c46;
  text-decoration: none;
  border-bottom: 3px solid #b4e7f8;
  box-shadow: inset 0 -4px 0 #b4e7f8;
}
.location-name small {
  font-weight: normal;
  color: #000;
  font-size: 14px;
  display: block;
}

.subway-info {
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.9);
}
.subway-6 {
  padding: 2px;
  border-radius: 1px;
  background-color: #a86123;
  color: #fff;
}

.bus-info {
  margin: 15px auto 0;
  background-color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  padding: 20px;
}

.bus-info-head {
}

.bus-info-content {
  font-size: 14px;
}
</style>
