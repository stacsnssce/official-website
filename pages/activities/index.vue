<template>
  <section>
    <h1 class="page-title center-align">
      Activities
    </h1>
  <div class="container card activities-wrapper">
    <div class="row activities m3">
      <div v-for="activity in activities.slice().reverse()" :key="activity.id" class="col s12 m6">
        <div class="card activity-card m4">
          <nuxt-link
            :to="{name: 'activities-desc', params: {desc: activity.desc, id: activity.id}}"
          >
            <div class="card-image">
              <progressive-img
                :src="`${activity.attribute.cover}`"
                placeholder="/imageplaceholder8x5.png"
                blur="30"
                delay="200"
                class="activity-image center-align"
              />
            </div>
            <div class="card-content">
              <h5 class="act-card-title">
                <b>{{ activity.attribute.title }}</b>
              </h5>
              <h6 class="act-card-date">
                {{ activity.attribute.date }}
              </h6>
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
    return axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/activities')
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
          // store.commit('Activities', activities)
        })))
      })
  },
  computed: {
    activities () {
      return this.$store.state.activities
    }
  },
  // async asyncData (context) {
  // }
  head () {
    return {
      title: 'Activities - STACS - NSS College of Engineering',
      meta: [
        { hid: 'description', name: 'description', content: 'Activities and Events conducted by STACS to encourage students and give them more opportunities' }
      ]
    }
  }
}
</script>

<style lang="scss">
.activity-image {
  max-width: inherit !important;
  padding: 0 !important;

  * {
    padding: 0 !important;
  }

  .progressive-image-wrapper,
  .progressive-image-main,
  .progressive-image-placeholder {
    max-width: inherit!important;
    padding: 0 !important;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}
.activities-wrapper {
  box-sizing: border-box;
  min-width: 200px;

  margin: 0 auto;
  border-left: 1px solid #eaecef;
  border-right: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
  border-radius: 25px;
}
.page-title {
  color: black;
  font: Bold 40px/43px Source Sans Pro;
}
.activities {
  padding: 10px;
}
.activity-card {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
  max-width: 450px;
  height: auto;
}
.activity-card:hover {
  transform: scale(0.98, 0.99);
    box-shadow: 0 0 10px rgb(88, 90, 90);
  transition: 0.3s;
}
.act-card-title {
  color: #035f59;
}
.act-card-date {
  color: rgb(49, 49, 49);
  font-weight: 700;
}
@media screen and (min-width: 600px) {
  .activity-card {height: 430px;}
}
</style>
