<template>
  <div>
    <div class="container">
      {{ /*eslint-disable-next-line*/ }}
      <div v-html="content" class="description"></div>
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
    async asyncData ({params, payload}) {
      if(payload) {
        return {
            title: payload.title,
            content: payload.body
        }
      } else {
        return await axios.get(`https://raw.githubusercontent.com/stacsnssce/webdata/master/activities/${params.id}.md`)
          .then((res) => {
            const mdf = fm(res.data)
            
            return {
              title: mdf.attributes,
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
  .description{
    box-sizing: border-box;
    min-width: 200px;
    margin: 0 auto;
    padding: 45px;
    border-left: 1px solid
    #eaecef;
    border-right: 1px solid
    #eaecef;
    border-bottom: 1px solid
    #eaecef;
    h1{
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }
    p{
      justify-content: center;
      text-align: justify;
      display:flex;
    }
  }
  .description img {
      max-width: 100%;
    }
</style>
