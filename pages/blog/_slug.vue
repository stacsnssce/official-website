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
const fm = require('front-matter')
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
        if(params.body) {
          return {
            content: md.render(params.body)
          }
        }
        else {
          return await axios.get(`https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/${params.slug}.md`)
            .then((res) => {
              const mdf = fm(res.data)
              return {
                content: md.render(mdf.body)
              }
            })
        }
      }
  },
  data () {
    return {
      content: ""
    }
  }
}
</script>