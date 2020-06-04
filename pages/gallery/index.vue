<template>
  <div>
    <!-- {{ gallery }} -->
    <h1>Gallery</h1>
    <section v-for="ga in gallery" :key="ga.title">
      <h4>
        {{ ga.title }}
      </h4>
      <div>
        <img v-for="im in ga.images" :key="im" :src="im" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  fetch ({ store }) {
    // const psts = []
    return axios.get('https://raw.githubusercontent.com/stacsnssce/webdata/master/gallery.json')
      .then(async ({ data }) => {
        /* eslint-disable no-console */
        // console.log(data.gallery)
        await store.commit('Gallery', data.gallery)
      })
      .then(() => {
      })
  },
  computed: {
    gallery () {
      return this.$store.state.gallery
    }
  },
  head () {
    return {
      title: 'STACS Gallery',
      meta: [
        { hid: 'description', name: 'description', content: 'Photo gallery showcasing events and activities of STACS' }
      ]
    }
  }
}
</script>

<style>
</style>
