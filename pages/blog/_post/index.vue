<template>
  <div>
    <div class="container">
      <div>{{ post.author }}</div>
      {{ /*eslint-disable-next-line*/ }}
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  typographer: true
})

// Let's require the needed modules
export default {
  async asyncData (context) {
    if (context) {
      return await axios.get(`https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/${context.params.post}.md`)
        .then((res) => {
          const mdf = fm(res.data)
          return {
            post: mdf.attributes,
            content: md.render(mdf.body)
          }
        })
    }
  },
  data () {
    return {
      post: {}
    }
  }
}
</script>
