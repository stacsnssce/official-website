<template>
  <section class="wrapper container">
    <h1 class="newsletter-title center-align">Newsletter</h1>
    <div class="container newsletter-card">
      <div class="row">
        <div v-for="newsletter in newsletters" :key="newsletter.id" class="col s16 m6 l4">
          <div class="card small">
            <nuxt-link :to="{ name: 'newsletter-newsletter', params: { desc: newsletter.desc, id: newsletter.id }}">
              <div class="card-image">
                <progressive-img
                  :src="`${newsletter.attribute.cover}`"
                  placeholder="/imageplaceholder250.png"
                  blur="30"
                  delay="200"
                  class="newsletter-image center-align"/>
              </div>
              <div class="card-content">
                <b class="date">{{ newsletter.attribute.year }}</b>
                <h5>
                  <b>{{ newsletter.attribute.name }}</b>
                </h5>
              </div>
            </nuxt-link>
          </div>
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
    return axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/newsletter')
      .then(async ({ data }) => {
        /* eslint-disable no-console */
        // console.log(data)
        store.commit('Activities', await Promise.all(data.map(async (element) => {
          return await axios.get(element.download_url).then((res) => {
            const mdf = fm(res.data)
            // eslint-disable-next-line
            // console.log(mdf)
            return {
              attribute: mdf.attributes,
              desc: element.sha,
              body: mdf.body,
              id: element.name.slice(0, -3)
            }
          })
          // store.commit('Newsletters', newsletters)
        })))
      })
  },
  computed: {
    newsletters () {
      return this.$store.state.activities
    }
  },
  // async asyncData (context) {
  // }
  head () {
    return {
      title: 'Newsletter - STACS - NSS College of Engineering',
      meta: [
        { hid: 'description', name: 'description', content: 'The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents ' }
      ]
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  margin: 12px auto;
  // padding: 20px 0px;

  .newsletter-title {
    font-size: 32px;
    font-weight: bolder;
  }
  .newsletter-card {
    width: 90%;
    padding: 5%;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(73, 72, 72, 0.2);
    transition: 0.2s linear;
    border-radius: 25px;

    .card {
      max-height: 250px !important;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);
      }
    }
    .newsletter-image {
      max-width: inherit !important;
      padding: 0 !important;

      * {
        padding: 0 !important;
      }

      .progressive-image-wrapper,
      .progressive-image-main,
      .progressive-image-placeholder {
        max-width: inherit !important;
        padding: 0 !important;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .card-content {
      background: transparent;
      padding: 10px 5px;
      margin: 0px;
      font-size: 18px;
      font-weight: normal;
      text-align: center;
      color: black;

      .date{
        font-weight: lighter;
        color: darnewsletterkslategray;
      }
    }
  }
}
</style>
