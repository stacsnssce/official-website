<template>
  <section class="container">
    <h1><u>Blog Home Page</u></h1>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.heading }}</h3>
        <h5>{{ post.author }}</h5>
        <h5>{{ post.date }}</h5>
        <nuxt-link :to="`/blog/${post.id}`">
          Read More
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    return await axios.get('https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/postlist.json')
      .then(({ data }) => {
        return {
          posts: data.Posts
        }
      })
  }
}
</script>

<style lang="scss">
</style>
