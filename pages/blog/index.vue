<template>
  <section class="post-wrapper card container">
    <h1 class="page-title center-align">
      Blog Posts
    </h1>
    <div class="container">
      <div v-for="post in posts" :key="post.id" class="row blog-card">
        <div class="col blog-col s12 m3 l4 center-align hide-on-med-and-up">
          <progressive-img
            :src="`${post.attribute.image}`"
            :placeholder="`https://github.com/${post.attribute.author}.png?size=10`"
            blur="30"
            delay="200"
            class="blog-image center-align"
          />
        </div>
        <div class="col l8 blog-card-content">
          <h3 class="blog-title">
            {{ post.attribute.title }}
          </h3>
          <h5 class="blog-desc">
            {{ post.attribute.desc }}
          </h5>
          <div class="author">
            <div class="author-image">
              <img :src="`https://github.com/${post.attribute.author}.png?size=50`" alt="`${post.attribute.author}`">
            </div>
            <div class="author-details">
              <h5 class="author-name">
                {{ post.attribute.name }}
              </h5>
              <h5 class="blog-date">
                {{ post.attribute.date }}
              </h5>
            </div>
          </div>
          <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.id, body: post.body} }">
            Read More....
          </nuxt-link>
        </div>
        <div class="col blog-col s12 m3 l4 center-align hide-on-small-only ">
          <progressive-img
            :src="`${post.attribute.image}`"
            :placeholder="`https://github.com/${post.attribute.author}.png?size=10`"
            blur="30"
            delay="200"
            class="blog-image center-align"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
const fm = require('front-matter')

export default {
  fetch ({ store }) {
    const psts = []
    return axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/posts')
      .then(({ data }) => {
        /* eslint-disable no-console */
        console.log(data)

        data.forEach(async (element) => {
          await axios.get(element.download_url)
            .then((res) => {
              const mdf = fm(res.data)
              // eslint-disable-next-line
              console.log(mdf)
              psts.push({
                attribute: mdf.attributes,
                body: mdf.body,
                id: element.name.slice(0, -3)
              })
            })
          if (data[data.length - 1] === element) {
            console.log(`PSTS : ${psts}`)
            store.commit('blogPosts', psts)
          }
        })
      })
      .then(() => {
      })
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
  // async asyncData (context) {
  // }
}
</script>

<style lang="scss">

.post-wrapper {
  margin: 12px auto;
  padding: 20px 0;

  .page-title {
    font-size: 32px;
    font-weight: bolder;
  }

  .blog-card {
    padding: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(100, 100, 100,0.2);
    transition: 0.2s linear;
    border-radius: 8px;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 10px rgba(100, 100, 100,0.5);
    }
    .blog-col {
      padding: 0 !important;

      .blog-image {
        max-width: 180px !important;
        width: 180px !important;
        height: 180px !important;
        padding: 0 !important;

        * {
          padding: 0 !important;
        }

        .progressive-image-wrapper,
        .progressive-image-main,
        .progressive-image-placeholder {
          width: 180px!important;
          height: 180px!important;
          padding: 0 !important;
        }
        img {
          object-fit: cover;
        }
      }
    }

    .blog-card-content{
      .blog-title {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 12px;
        border-bottom: solid 1px #333333;
      }
      .author {
        display: flex;

        .author-image {
          margin-right: 12px;
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
          overflow: hidden;
        }
        .author-details {
          padding-top: 4px;

          .author-name {
            font-size: 16px;
            font-weight: bold;
            margin: 0 !important;
          }
        }
      }
      .blog-date {
        font-size: 12px;
        margin: 12px 0!important;
      }
      .blog-desc {
        margin: 12px 0!important;
        font-size: 18px;
        font-weight: 600;
        color: gray;
      }
      a {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
