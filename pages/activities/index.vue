<template>
  <section class="container card activities-wrapper">
    <h4 class="page-title"><b>Activities</b></h4>
    <div class="row activities">
      <div v-for="activity in activities" :key="activity.id" class="col s12 m6">
        <div  class="card activity">
          <nuxt-link :to="`/activities/${activity.id}`">
            <div class="card-image">
              <img :src=activity.attribute.cover>
            </div>
            <div class="card-content">
              <h5 class="act-card-title"><b>{{ activity.attribute.title}}</b></h5>
              <h6 class="act-card-date">{{ activity.attribute.date}}</h6>
            </div>
          </nuxt-link>
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
    const activities = []
    return axios.get('https://api.github.com/repos/stacsnssce/webdata/contents/activities')
      .then(({ data }) => {
        /* eslint-disable no-console */
        console.log(data)

        data.forEach(async (element) => {
          await axios.get(element.download_url)
            .then((res) => {
              const mdf = fm(res.data)
              // eslint-disable-next-line
              console.log(mdf)
              activities.push({
                attribute: mdf.attributes,
                slug: mdf.attributes.title,
                body: mdf.body,
                id: element.name.slice(0, -3)
              })
            })
          if (data[data.length - 1] === element) {
            console.log(`Activities : ${activities}`)
            store.commit('Activities', activities)
          }
        })
      })
      .then(() => {
      })
  },
  computed: {
    activities () {
      console.log(`Activities : ${this.$store.state.activities}`)
      return this.$store.state.activities
    }
  }
  // async asyncData (context) {
  // }
}
</script>

<style lang="scss">
.activities-wrapper{
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
}
.page-title{
  text-align: center;
  color: #220e24;
}
.activities{
  align-items: center;
  justify-content: center;
}
.activity {
  text-align: center;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
}
.activity:hover {
  transform: scale(0.99, 0.99);
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.2);
  transition: 0.2s linear;
}
.act-card-title{
  color: #0c3c78;
}
.act-card-date{
  color:black;
}
</style>
