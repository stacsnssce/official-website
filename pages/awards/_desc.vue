<template>
  <section class=" description">
    <div class="description-header">
      .
    </div>
    <div class=" container card large description-content">
      <div class="col description-text">
        <h3 class="description-header">Award Title</h3>
        <h5 class="description-date">date</h5>
        {{ /*eslint-disable-next-line*/ }}
        <div v-html="content"></div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import axios from "axios";
const fm = require("front-matter");
const md = require("markdown-it")({
  html: true,
  typographer: true
});
export default {
  async asyncData({ params, payload }) {
    if (payload) {
      return {
        title: payload.title,
        content: payload.body
      };
    } else {
      return await axios
        .get(
          `https://raw.githubusercontent.com/stacsnssce/webdata/master/awards/${params.id}.md`
        )
        .then(res => {
          const mdf = fm(res.data);
          return {
            title: mdf.attributes,
            content: md.render(mdf.body)
          };
        });
    }
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style lang="scss">
.description {
  padding: 0px;
  line-height: 1.6em;
  margin: 0px;

  background-position-x: center;
  // background-image: url("./images/967682.jpg");
  background-size: 1080px 350px;
  background-repeat: no-repeat;

  // background-attachment: fixed;
  align-self: center;

  .description-content {
    margin: 12px auto;
    padding: 20px 0;
    box-shadow: 0 0 10px rgba(73, 72, 72, 0.2);
    transition: 0.1s linear;
    border-radius: 25px;
    top: 200px;
    cursor: pointer;

    &:hover {
      scale: 1.02;
      box-shadow: 0 0 30px rgba(100, 100, 100, 0.2);
    }
  }

  .description-text {
    padding: 0px 40px;
    margin: 0px auto;

    .description-header {
      font-weight: bold;
      text-align: center;
    }
    .description-date {
      text-align: center;
      font-size: 1.2em;
      font-style: italic;
      color: rgb(85, 79, 79);
    }
  }
}
</style>
