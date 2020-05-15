<template>
  <section class="container">
    <h1><u>Activities</u></h1>
    <div class="activities">
      <div v-for="activity in activities" :key="activity.id" class="activity">
        <h3>{{ activity.activity }}</h3>
        <div><img :src=activity.url></div>
         <nuxt-link :to="`/activities/${activity.id}`">
         Read more..
        </nuxt-link>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData (context) {
    return await axios.get('https://raw.githubusercontent.com/stacsnssce/webdata/master/activities/acticities.json')
      .then(({ data }) => {
        return {
          activities: data
        }
      })
  }
}
</script>

<style lang="scss">
</style>
