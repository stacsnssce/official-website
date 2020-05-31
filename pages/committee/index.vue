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
            <div class="card-image center-align">
              <progressive-img
                class="committee-img circle responsive-image"
                :src="`${c.url || '/profilepic.png'}`"
                placeholder="/imageplaceholder1x1.png"
                :alt="`${c.name}`"
                :blur="30"
              />
            </div>
            <div class="card-content center-align">
              <p class="text">
                {{ c.name }}
              </p>
              <p class="textd">
                {{ c.designation }}
              </p>
            </div>
            <br>
            <br><br>
            <div class="card-action middle">
              <a :href="c.profiles.instagram" target="blank" class="wave-effect wave-light">
                <i v-if="c.profiles.instagram" class="fa fa-instagram insta hoverable circle" />
              </a>&nbsp;
              <a :href="c.profiles.twitter" target="blank" class="wave-effect wave-light">
                <i v-if="c.profiles.twitter" class="fa fa-twitter hoverable twt circle" />
              </a>&nbsp;
              <a :href="c.profiles.linkedin" target="blank" class="wave-effect wave-light">
                <i v-if="c.profiles.linkedin" class="fa fa-linkedin hoverable lin circle" />
              </a>&nbsp;
              <a :href="c.profiles.github" target="blank" class="wave-effect wave-light">
                <i v-if="c.profiles.github" class="fa fa-github hoverable git circle" />
              </a>&nbsp;
              <a :href="c.profiles.website" target="blank" class="wave-effect wave-light">
                <i v-if="c.profiles.website" class="fa fa-globe hoverable web circle" />
              </a>
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
    return await axios
      .get(
        'https://raw.githubusercontent.com/stacsnssce/webdata/master/committee.json'
      )
      .then(({ data }) => {
        return {
          content: data
        }
      })
  },
  head () {
    return {
      title: 'Committee - STACS - NSS College of Engineering',
      meta: [
        { hid: 'description', name: 'description', content: 'Committee of STudents Association of Computer Science (STACS) in NSS College of Engineering. The Commitee ensures the regular functioning and proper coordination within the association' }
      ]
    }
  }
}
</script>
<style lang="scss">
.committee-img {
  width: 160px !important;
  height: 160px !important;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
}
</style>
<style lang="scss" scoped>
.card-panel {
  border-radius: 16px 16px 16px 16px;
  box-shadow: 0 4px 8px grey;
  height: 360px;
}
.middle {
  text-align: center;
}
.card-content{
  line-height: 8pt;
}
.text {
  font-weight: bold;
  font-size: 24px;
}
.textd{
font-weight: bold;
font-size: 16px;
}
i:hover{
  transform: scale(1.3);
  object-fit: cover;
}
.middle {
  position: relative;
  font-size: 28px;
  bottom: 60px;
}
.insta{
  color: #8A3AB9;
}
.twt{
  color:#00acee;
}
.git{
  color: #211F1F;
}
.lin{
  color: #0072B1;
}
.web{
 color: #FE4164;
}
</style>
