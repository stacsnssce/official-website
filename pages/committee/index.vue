<template>
  <section class="container">
    {{ /*eslint-disable-next-line*/ }}
    Committee Page
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <h4>{{ post.name }}</h4>
        <h4>{{ post.profiles.github }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    return await axios.get('https://raw.githubusercontent.com/stacsnssce/webdata/master/committee.json')
      .then(({ data }) => {
        return {
          posts: data.committee
        }
      })
  }
}
</script>

<style>
</style>
