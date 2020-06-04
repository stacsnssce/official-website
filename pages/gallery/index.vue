<template>
  <div class="container">
    <!-- {{ gallery }} -->
    <h1 class="heading">Gallery</h1>
    <section v-for="ga in gallery" :key="ga.title" class="allth">
      <h4 class="title">
        {{ ga.title }}
      </h4>
      <div class="allimg row">
        <img v-for="im in ga.images" :key="im" :src="im" class="img s12 m4 l3 card">
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

<style lang=scss scoped>
.heading{
  margin:15px;
  font-size:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
}
.allth{
    font-size: 30px;
  color: black;
  padding-left: 15px;
  width: auto;
  height: 4m0px;
}
.title{
  font-size: 30px;
  background-color: #E0E0E0;
  color: black;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px!important;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  width: auto;
  height: 4m0px;
}
.img{
  margin: 0 1.5rem 1.5rem 0;
  display: inline-block;
  padding: 10px;
  /*box-shadow: 5px 5px 5px rgba(0, 0, 255, 0.5);*/
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}
.allimg{

}
</style>
