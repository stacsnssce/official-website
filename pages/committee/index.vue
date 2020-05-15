<template>
  <section class="container">
    {{ /*eslint-disable-next-line*/ }}
    <p class="fontchange">COMMITTEE</p>
    <div class="posts">
      <div class="row">
      <div v-for="post in posts" :key="post.id" class="post">
      <div class="col s4 m3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" v-bind:src="post.url">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{ post.name }}<i class="material-icons right">more_vert</i></span>
            <p>{{ post.designation }}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{ post.name }}<i class="material-icons right">close</i></span>
            <p><a v-bind:href="post.profiles.instagram">{{ post.profiles.instagram }}</a></p>
            <p><a v-bind:href="post.profiles.twitter">{{ post.profiles.twitter }}</a></p>
            <p><a v-bind:href="post.profiles.linkedin">{{ post.profiles.linkedin }}</a></p>
            <p><a v-bind:href="post.profiles.github">{{ post.profiles.github }}</a></p>
            <p><a v-bind:href="post.profiles.website">{{ post.profiles.website }}</a></p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData (context) {
    return await axios.get('https://raw.githubusercontent.com/arshupt/official-website/master/committee.json')
      .then(({ data }) => {
        return {
          posts: data.committee
        }
      })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap');
.fontchange{
    font-family: 'Work Sans';
    font-size: 40px;
    text-align: center;
}
</style>
