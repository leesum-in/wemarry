<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'RIDIBatang';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
html {
  font-family: 'RIDIBatang', 'Source Sans Pro', 'Segoe UI', serif;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.arrow {
  cursor: pointer;
  width: 50px;
  height: 40px;
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
}

.arrow svg {
  padding: 5px;
}

.left:hover polyline,
.left:focus polyline {
  stroke-width: 9;
}

.left:active polyline {
  stroke-width: 12;
  transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
  stroke-width: 9;
}

.right:active polyline {
  stroke-width: 12;
  transition: all 100ms ease-in-out;
}

polyline {
  stroke-width: 6;
  transition: all 250ms ease-in-out;
}
</style>
