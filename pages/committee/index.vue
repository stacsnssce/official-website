<template>
  <div>
    {{ /*eslint-disable-next-line*/ }}
    <div class="fontchange">COMMITTEE</div>
    <div class="posts container">
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
            <span class="card-title grey-text text-darken-4 fontedit">{{ post.name }}<i class="material-icons right">close</i></span>
            <b class="fontedit">
            <p v-show="post.profiles.instagram"><a v-bind:href="post.profiles.instagram">Instagram</a></p>
            <p v-show="post.profiles.twitter"><a v-bind:href="post.profiles.twitter">Twitter</a></p>
            <p v-show="post.profiles.linkedin"><a v-bind:href="post.profiles.linkedin">Linked In</a></p>
            <p v-show="post.profiles.github"><a v-bind:href="post.profiles.github">Git Hub</a></p>
            <p v-show="post.profiles.website"><a v-bind:href="post.profiles.website">Website</a></p></b>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
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

<style lang='scss'>
.fontchange{
    font-family: 'rockwell';
    font-weight: bold;
    font-size: 100px;
    text-align: center;
    color: blue;
}
.fontedit{
  text-align: center;
}
</style>
