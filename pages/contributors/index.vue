<template>
  <div class="container">
    <div class="center-align">
      <h4>People who made it possible</h4>
    </div>
    <br>
    <br>
    <div class="row">
      <section v-for="c in contributors" :key="c.id">
        <div class="col s12 m4 l4">
          <div class="card-panel hoverable">
            <div class="card-image center-align">
              <progressive-img
                class="contributor-img circle responsive-image"
                :src="`${c.avatar_url || '/profilepic.png'}`"
                placeholder="/imageplaceholder1x1.png"
                :alt="`${c.login}`"
                :blur="30"
              />
            </div>
            <div class="card-content center-align text">
              <p v-if="c.login" style="font-size:20px">
                {{ c.login }}
              </p>
              <p v-else style="font-size:20px">
                {{ c.login }}
              </p>
              <a :href="c.html_url">
                View Profile
                <i class="fa fa-github git circle" />
              </a>
              &nbsp;
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
  async fetch ({ store }) {
    // const psts = []
    return await axios.get('https://api.github.com/repos/stacsnssce/official-website/contributors')
      .then(async ({ data }) => {
        /* eslint-disable no-console */
        store.commit('Contributors', data)
      })
  },
  computed: {
    contributors () {
      return this.$store.state.contributors
    }
  },
  // async asyncData (context) {
  //   return await axios
  //     .get(
  //       'https://api.github.com/repos/stacsnssce/official-website/stats/contributors'
  //     )
  //     .then(({ data }) => {
  //       return {
  //         content: data
  //       }
  //     })
  // },
  head () {
    return {
      title: 'Contributors - STACS Website'
    }
  }
}
</script>
<style lang="scss">
.contributor-img {
  width: 225px !important;
  height: 225px !important;

  img {
    width: 225px!important;
    height: 225px!important;
    object-fit: cover;
  }
}
</style>
<style lang="scss" scoped>
h4{
  font-size: 32px;
  font: Bolder 40px/43px Source Sans Pro;
}
.card-panel {
  height: 400px;
}
.text {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.middle {
  position: absolute;
  font-size: 28px;
  overflow: hidden;
  text-align: center;
}
.git{
  color: #211F1F;
}
</style>
