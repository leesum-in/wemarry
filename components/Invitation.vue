<template>
  <div id="section2" class="section">
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
</template>

<script>
export default {
  name: 'Invitation'
}
</script>

<style scoped>
#section2 .fp-bg {
  background-image: url(/img/invitation.png);
  background-size: cover;
  background-position: 49% 10%;
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
