<template>
  <index />
</template>

<script>
import Index from '@/components/Index'
export default {
  components: { Index }
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
</style>
