<template>
  <div class="container" :class="{ 'hide-arrow': hideArrow }">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
      class="fp-auto-height-responsive"
    >
      <introduction :name="name" @move="moveTo" />
      <invitation />
      <gallery
        :fullpage="$refs.fullpage"
        :load-gallery="loadGallery"
        @move="moveTo"
      />
      <location />
      <guest-book :name="name" @move="moveTo" />
    </full-page>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction'
import Invitation from '@/components/Invitation'
import Gallery from '@/components/Gallery'
import GuestBook from '@/components/GuestBook'
import Location from '@/components/Location'

export default {
  name: 'Index',
  components: { Location, GuestBook, Gallery, Invitation, Introduction },
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      options: {
        controlArrows: true,
        loopHorizontal: false,
        licenseKey: '6FA7605F-5A804CBF-B02D5636-DC599F82',
        parallax: true,
        parallaxKey: 'd2VtYXJyeS5pbl9LTThjR0Z5WVd4c1lYZz05MUk=',
        parallaxOptions: {
          type: 'reveal'
        },
        normalScrollElements: '.normal-scroll',
        touchSensitivity: 7,
        afterLoad: this.afterLoad,
        recodeHistory: false,
        slidesNavigation: true
      },
      loadGallery: false,
      hideArrow: true
    }
  },
  methods: {
    moveTo(section, slide) {
      try {
        this.$refs.fullpage.api.moveTo(section, slide)
      } catch (e) {}
    },
    afterLoad(origin, dest, dir) {
      const galleryIndex = 2
      if (dest.index === galleryIndex) {
        this.loadGallery = true
      }

      this.hideArrow = dest.index !== galleryIndex
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

.hide-arrow .fp-controlArrow {
  opacity: 0;
}

.fp-controlArrow {
  opacity: 0.7;
  transition: all 0.5s ease-in;
}

.fp-slidesNav ul li a span {
  background: #fff !important;
}

#section4 .fp-slidesNav {
  display: none;
}
</style>
