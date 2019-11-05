<template>
  <index :name="$route.params.name" />
</template>

<script>
import Index from '@/components/Index'
export default {
  components: { Index },
  middleware({ router, params }) {
    if (!params.name) {
      router.push({ path: '/' })
    }
  }
}
</script>
