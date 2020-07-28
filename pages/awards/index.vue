<template>
  <section class="wrapper container">
    <h1 class="award-title center-align">
      Achievements
    </h1>
    <div class="container award-card">
      <div class="row">
        <div v-for="award in awards.slice().reverse()" :key="award.id" class="col l4 m6 s12">
          <div class="card small">
            <nuxt-link :to="{ name: 'awards-desc', params: { desc: award.desc, id: award.id }}">
              <div class="card-image">
                <progressive-img
                  :src="`${award.attribute.cover}`"
                  placeholder="/imageplaceholder800x500.png"
                  blur="30"
                  delay="200"
                  class="award-image center-align"
                />
              </div>
              <div class="card-content">
                <h5>
                  <b>{{ award.attribute.title }}</b>
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
    return axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/awards')
      .then(async ({ data }) => {
        /* eslint-disable no-console */
        // console.log(data)
        store.commit('Awards', await Promise.all(data.map(async (element) => {
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
          // store.commit('Awards', awards)
        })))
      })
  },
  computed: {
    awards () {
      return this.$store.state.awards
    }
  },
  // async asyncData (context) {
  // }
  head () {
    return {
      title: 'Awards - STACS - NSS College of Engineering',
      meta: [
        { hid: 'description', name: 'description', content: 'The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents ' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 12px auto;
  // padding: 20px 0px;

  .award-title {
    font-size: 32px;
    font-weight: bolder;
    font: Bold 40px/43px Source Sans Pro;
  }
  .award-card {
    width: 90%;
    padding: 5%;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(73, 72, 72, 0.2);
    transition: 0.2s linear;
    border-radius: 25px;
    background-size:cover;

    .card {
      max-height: 250px !important;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 20px  rgb(88, 90, 90);
      }

      h5 {
        font-size: 20px;
      }
    }
    .award-image {
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
      padding: 0px 5px;
      margin: 0px;
      font-size: 12px;
      font-weight: normal;
      text-align: center;
      color: rgb(80, 79, 79);
    }
  }
}
</style>
