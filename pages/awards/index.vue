<template>
  <section class="award-wrapper container">
    <h1 class="award-title center-align">
      Achievements
    </h1>
    <div class="container award-card">
      <div class="row">
        <div v-for="award in awards.slice().reverse()" :key="award.id" class="col l4 m6 s12">
          <div class="card small">
            <nuxt-link :to="{ name: 'awards-desc', params: { desc: award.desc, id: award.id }}">
              <div class="award-image">
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

<style lang="scss">
.award-wrapper {
  margin: 12px auto;
  // padding: 20px 0px;


  .award-title {
    font-size: 32px;
    font-weight: bolder;
    font: Bold 40px/43px Source Sans Pro;
  }
  .award-card {
    width: 100%;
    cursor: pointer;
    transition: 0.2s linear;
    background-size:cover;

    .card {
      max-height:450px !important;
      padding: 10px;
      border-radius: 10px;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 20px  rgb(88, 90, 90);
      }

      h5 {
        font-size: 18px;
        font-weight: bolder;
        margin: 20px 0;
      }
    }
    .award-image {
      height: 200px;
      .progressive-image-placeholder,
      .progressive-image-main {
        max-width: inherit !important;
        padding: 0 !important;
      }
      .progressive-image-main {
        height: 200px !important;
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
