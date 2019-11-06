<template>
  <button class="arrow left" @click="$emit('click')">
    <svg width="30px" height="40px" viewBox="0 0 50 80" xml:space="preserve">
      <polyline
        fill="none"
        stroke="#FFFFFF"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ArrowLeft'
}
</script>
