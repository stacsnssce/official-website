<template>
  <div class="container">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
    <link rel="stylesheet" href="style.css">
    <div class="center-align">
      <h4>Our Faculties</h4>
    </div>
    <br>
    <br>
    <div class="row">
      <section v-for="c in content.faculties" :key="c.designation">
        <div class="col s12 m4 l6">
          <div class="card-panel hoverable">
            <div class="card-image center-align">
              <img class="circle responsive-image" :src="`${c.url || '/download.png'}`">
            </div>
            <div class="card-content center-align text">
              <p style="font-size:20px">{{ c.name }}</p>
              <p class="center-align text">{{ c.designation }}</p>
              <a href="c.profile">
                View Profile
                <i class="fa fa-info-circle"></i>
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
  }
}
</script>
<style lang="scss" scoped>
.card-panel {
  border-radius: 16px 16px 16px 16px;
  box-shadow: 0 4px 8px grey;
  height: 400px;
}
.text {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
img {
  width: 225px;
  height: 225px;
}
a:hover {
  text-decoration: underline;
}
.middle {
  position: absolute;
  font-size: 28px;
  overflow: hidden;
  text-align: center;
}
</style>
