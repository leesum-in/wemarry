<template>
  <div class="container">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
      class="fp-auto-height-responsive"
    >
      <introduction :name="name" />
      <invitation />
      <gallery :fullpage="$refs.fullpage" @move="moveTo" />
      <guest-book :name="name" @move="moveTo" />
    </full-page>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction'
import Invitation from '@/components/Invitation'
import Gallery from '@/components/Gallery'
import GuestBook from '@/components/GuestBook'
export default {
  name: 'Index',
  components: { GuestBook, Gallery, Invitation, Introduction },
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
        },
        loopBottom: true,
        normalScrollElements: '.normal-scroll'
      }
    }
  },
  methods: {
    slideGallery() {
      try {
        this.$refs.fullpage.api.moveTo(3, 1)
      } catch (e) {}
    },
    moveTo(section, slide) {
      try {
        this.$refs.fullpage.api.moveTo(section, slide)
      } catch (e) {}
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

ul,
ol,
li,
dl {
  list-style: none;
}
</style>
