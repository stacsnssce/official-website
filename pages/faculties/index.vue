<template>
  <div class="container">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <div class="center-align heading">
      <h4>Our Faculties</h4>
    </div>
    <br>
    <br>
    <div class="row">
      <section v-for="c in content.faculties" :key="c.designation">
        <div class="col s12 m4 l4">
          <div class="card-panel hoverable">
            <div class="card-image center-align">
              <progressive-img
                class="faculty-img circle responsive-image"
                :src="`${c.url || '/profilepic.png'}`"
                placeholder="/imageplaceholder1x1.png"
                :alt="`${c.name}`"
                :blur="30"
              />
            </div>
            <div class="card-content center-align text">
              <p style="font-size:20px">
                {{ c.name }}
              </p>
              <p class="center-align text">
                {{ c.designation }}
              </p>
              <a :href="`${c.profile || 'http://nssce.ac.in'}`">
                <div class="prof">
                View Profile
                <i class="fa fa-info-circle" />
                </div>
              </a>
              &nbsp;
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
  async asyncData (context) {
    return await axios
      .get(
        'https://raw.githubusercontent.com/stacsnssce/webdata/master/faculties.json'
      )
      .then(({ data }) => {
        return {
          content: data
        }
      })
  },
  head () {
    return {
      title: 'Faculties - Department of Computer Science And Engineering - NSSCE',
      meta: [
        { hid: 'description', name: 'description', content: 'Faculties of Department of Computer Science And Engineering in NSS College of Engineering. The faculties provide constant support for students' }
      ]
    }
  }
}
</script>

<style lang="scss">
.faculty-img {
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
  border-radius: 16px 16px 16px 16px;
  height: 400px;
  box-shadow: 0 4px 8px 0 rgb(100, 160, 152);
}
.text {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #454747;
}
.prof{
  color: #13A59B;
}
a:hover {
  text-decoration: underline;
  color: #13A59B;
}
.middle {
  position: absolute;
  font-size: 28px;
  overflow: hidden;
  text-align: center;
}
</style>
