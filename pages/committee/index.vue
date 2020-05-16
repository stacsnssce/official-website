<template>
  <div class="container">
    <div class="center-align">
      <h4>Our Committee Members</h4>
    </div>
    <br>
    <br>
    <div class="row">
      <section v-for="c in content.committee" :key="c.designation">
        <div class="col s12 m6 l4">
          <div class="card-panel hoverable">
            <p class="center-align text">
              {{ c.designation }}
            </p>
            <div class="card-image center-align">
              <img class="circle responsive-image" :src="`${c.url || '/profilepic.png'}`">
            </div>
            <div class="card-content center-align text">
              <p>{{ c.name }}</p>
            </div>
            <br>
            <br>
            <div class="card-action middle">
              <a :href="c.profiles.instagram" class="wave-effect wave-light"><i class="fa fa-instagram hoverable circle" /></a>&nbsp;
              <a :href="c.profiles.twitter" class="wave-effect wave-light"><i class="fa fa-twitter hoverable circle" /></a>&nbsp;
              <a :href="c.profiles.linkedin" class="wave-effect wave-light"><i class="fa fa-linkedin hoverable circle" /></a>&nbsp;
              <a :href="c.profiles.github" class="wave-effect wave-light"><i class="fa fa-github hoverable circle" /></a>&nbsp;
              <a :href="c.profiles.website" class="wave-effect wave-light"><i class="material-icons action hoverable circle">language</i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    return await axios.get('https://raw.githubusercontent.com/stacsnssce/webdata/master/committee.json')
      .then(({ data }) => {
        return {
          content: data
        }
      })
  }
}

</script>
<style lang="scss" scoped>
.card-panel{
  border-radius: 16px 16px 16px 16px;
  box-shadow: 0 4px 8px grey;
  height: 400px;
}
.text{
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

img{
  width: 140px;
  height: 140px;
}
.middle{
  position: absolute;
  font-size: 28px;
  overflow: hidden;
  text-align: center;
}
</style>
