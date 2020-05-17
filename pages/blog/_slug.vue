<template>
  <div>
    <div class="container">
      {{ /*eslint-disable-next-line*/ }}
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
const md = require('markdown-it')({
  html: true,
  typographer: true
})
export default {
  async asyncData({params, payload}) {
      if(payload) {
          return {
              post: payload
          }
      } else {
        return {
          content: md.render(params.body)
        }
      }
  },
}
</script>