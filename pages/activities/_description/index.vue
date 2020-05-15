<template>
  <div class="container">
      {{ /*eslint-disable-next-line*/ }}
      <div v-html="content" ></div>
  </div>
</template>

<script>
import axios from 'axios'
const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  typographer: true
})
export default {
  async asyncData (context) {
    if (context) {
      return await axios.get(`https://raw.githubusercontent.com/stacsnssce/webdata/master/activities/${context.params.description}.md`)
        .then((res) => {
          const mdf = fm(res.data)
          return {
            activity: mdf.attributes,
            content: md.render(mdf.body)
          }
        })
    }
  },
  data () {
    return {
      activity: {}
    }
  }
}
</script>

<style lang="scss">
</style>
