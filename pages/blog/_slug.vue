<template>
  <div>
    <div class="container">
      <h1 class="blog-title">
        {{ title.title }}
      </h1>
      <p class="blog-desc">
        {{ title.desc }}
      </p>
      <div class="blog-author">
        <div>
          <img :src="`https://github.com/${title.author}.png?size=60`" alt="">
        </div>
        <div>
          <h6 class="author">
            <i class="material-icons">create</i>
            {{ title.name }}
          </h6>
          <h6 class="date">
            <i class="material-icons">date_range</i>
            {{ title.date }}
          </h6>
        </div>
      </div>
      {{ /*eslint-disable-next-line*/ }}
      <div class="blog-content" v-html="content" />
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
            title: payload.title,
            content: payload.body
        }
      } else {
        return await axios.get(`https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/${params.id}.md`)
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
      content: ""
    }
  }
}
</script>

<style lang="scss">
.container {
  .blog-title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    padding-bottom: 8px;
    border-bottom: solid 4px $primary-color;
  }

  .blog-desc {
    font-size: 20px;
    font-weight: bold;
    color: #666666;
  }

  .blog-author {
    display: flex;
    align-items: center;
    padding-bottom: 12px;

    * {
      margin: 0;
      padding: 0;
    }

    img {
      border-radius: 50%;
    }

    div:nth-child(2) {
      padding: 10px;
      
      h6 {
        margin: 8px 0;
      }
    }

    .author, .date {
      font-size: 16px;
      font-weight: bold;
      i { 
        font-size: 16px;
        margin-right: 8px;
      }
    }
  }

  .blog-content {
    text-align: justify;
    word-wrap: break-word;
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-top: solid 2px #999999;
    border-bottom: solid 2px #999999;

    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
    }

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }

    img{ 
      max-width: 100%;
      max-height: 300px;
      left: 50%;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      
    }
    ul li{
      list-style-type: disc;
      margin-left: 16px;
    }
  }
}
</style>
