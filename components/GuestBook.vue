<template>
  <div id="section4" class="section">
    <div id="slide4-1" class="slide">
      <div class="fp-bg"></div>
      <h3 class="text-box">신랑 신부에게 전하는 말</h3>
      <div class="message-container normal-scroll">
        <div class="message-list">
          <div
            v-for="message in currentMessages"
            :key="message.id"
            class="message"
          >
            <div class="message-meta">
              <span class="message-author">{{ message.name }}</span>
              <span class="message-date">{{ message.date }}</span>
            </div>
            <p class="message-content">
              {{ message.content }}
            </p>
          </div>
          <div v-for="i in 5 - currentMessages.length" :key="i" class="message">
            <div class="message-meta">
              <span class="message-author"></span>
              <span class="message-date"></span>
            </div>
            <p class="message-content"></p>
          </div>
        </div>
        <div class="message-nav">
          <arrow-left @click="prev" />
          <button class="submit action-button" @click="$emit('move', 4, 1)">
            작성하기
          </button>
          <arrow-right @click="next" />
        </div>
      </div>
    </div>
    <div id="slide4-2" class="slide">
      <div class="fp-bg"></div>
      <div id="msform" class="normal-scroll">
        <fieldset>
          <input
            v-model="form.name"
            type="text"
            name="name"
            placeholder="이름"
          />
          <textarea
            v-model="form.content"
            name="message"
            placeholder="전할 말"
            rows="3"
          ></textarea>
          <button class="submit action-button" @click="submit">저장하기</button>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import ArrowLeft from '@/components/ArrowLeft'
import ArrowRight from '@/components/ArrowRight'
import { messageApi } from '@/firebase/messageApi'
import { getTimeStamp } from '@/firebase/db'

export default {
  name: 'GuestBook',
  components: { ArrowRight, ArrowLeft },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentMessages: [],
      start: null,
      end: null,
      form: {
        name: this.name,
        content: ''
      }
    }
  },
  async mounted() {
    await this.initial()
  },
  methods: {
    async initial() {
      const result = await messageApi
        .orderBy('date', 'desc')
        .limit(5)
        .get()
      this.start = result.docs[0]
      this.end = result.docs[result.docs.length - 1]
      this.currentMessages = result.docs.map(this.docToData)
    },
    async prev() {
      const result = await messageApi
        .orderBy('date', 'desc')
        .endBefore(this.start)
        .limit(5)
        .get()
      if (result.docs.length) {
        this.start = result.docs[0]
        this.end = result.docs[result.docs.length - 1]
        this.currentMessages = result.docs.map(this.docToData)
      }
    },
    async next() {
      const result = await messageApi
        .orderBy('date', 'desc')
        .startAfter(this.end)
        .limit(5)
        .get()

      if (this.hasNext(result)) {
        this.start = result.docs[0]
        this.end = result.docs[result.docs.length - 1]
        this.currentMessages = result.docs.map(this.docToData)
      }
    },
    docToData(doc) {
      const { name, content, date } = doc.data()
      return {
        id: doc.id,
        name,
        content,
        date: this.formatDate(date)
      }
    },
    formatDate(date) {
      return dayjs.unix(date.seconds).format('YYYY/MM/DD HH:mm')
    },
    async submit() {
      if (!this.form.name || !this.form.content) {
        return
      }
      await messageApi.add({
        name: this.form.name,
        content: this.form.content,
        date: getTimeStamp()
      })

      this.form.name = ''
      this.form.content = ''

      await this.initial()
      this.$emit('move', 4, 0)
    },
    hasNext(result) {
      if (this.currentMessages.length < 5) {
        return false
      }

      return result.docs[result.docs.length - 1].id !== this.end.id
    }
  }
}
</script>

<style scoped>
#slide4-1 .fp-bg {
  background-image: url(/img/guestbook.jpg);
  background-size: cover;
  background-position: 49% 40%;
}

.message-container {
  margin: 10px auto;
  border: 1px solid #1d2c46;
  width: 90%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.4);
}

.message-list {
  max-height: 65vh;
  overflow: auto;
}

.message {
  display: flex;
  flex-direction: column;
  margin: 10px 5px 5px;
  font-size: 13px;
  border-bottom: 1px solid #1d2c46;
}

.message-meta {
  padding: 0 10px;
  height: 15px;
}

.message-author {
  float: left;
  font-weight: bold;
}

.message-date {
  float: right;
  font-size: 12px;
}

.message-content {
  margin-top: 3px;
  text-align: left;
  color: #444;
  min-height: 50px;
  overflow: hidden;
  padding: 0 3px;
}

.message-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 5px 10px;
}

#slide4-2 .fp-bg {
  background-image: url(/img/guestbook2.jpg);
  background-size: cover;
  background-position: 49% 40%;
}

/*form styles*/
#msform {
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  position: relative;
}

#msform fieldset {
  border: 0 none;
  border-radius: 3px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  margin: 0 10%;

  /*stacking fieldsets above each other*/
  position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
  display: none;
}

/*inputs*/
#msform input,
#msform textarea {
  padding: 15px;
  border: 0 none;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.4);
  font-family: 'RIDIBatang', serif;
}

/*buttons*/
.action-button {
  width: 100px;
  background: #1d2c46;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 10px 5px;
  opacity: 0.7;
}

.action-button:hover,
.action-button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #1d2c46;
  border: 0 none;
}
</style>
