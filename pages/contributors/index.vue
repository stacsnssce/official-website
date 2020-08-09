<template>
  <div class="container">
    <div class="center-align">
      <h4>Contributors</h4>
    </div>
    <br>
    <br>
    <div class="row">
      <section v-for="c in contributors" :key="c.id">
        <a :href="c.html_url">
        <div class="col s3 m2 l2">
            <div class="card-image center-align">
              <progressive-img
                class="contributor-img circle responsive-image"
                :src="`${c.avatar_url || '/profilepic.png'}`"
                placeholder="/profilepic.png"
                :alt="`${c.login}`"
                :blur="30"
              />
            </div>
            <!-- <div class="center-align">
              <p v-if="c.login" style="font-size:20px">
                {{ c.login }}
              </p>
              <p v-else style="font-size:20px">
                {{ c.login }}
              </p>
                View Profile
                <i class="fa fa-github git circle" />
              &nbsp;
            </div> -->
        </div>
        </a>
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
  min-height: 50px !important;
  min-width: 50px !important;
  width: 100% !important;
  transition: transform 0.2s;
  img {
    width: 100%;
    min-height: 50px;
    object-fit: cover;
    filter: grayscale(90%);
  }
}
.contributor-img:hover {
  transform: scale(1.2);
  z-index: 5;
  img {
    filter: none;
  }
}
</style>
<style lang="scss" scoped>
h4{
  font-size: 32px;
  font: Bolder 40px/43px Source Sans Pro;
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
