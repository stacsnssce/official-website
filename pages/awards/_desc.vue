<template>
  <section class="description">
    <div
    :style="`background-image: url('${title.cover}');`"
      class="description-cover">
      <div class="container card description-content">
        <div class="col description-text">
          <h3 class="container description-header">
            <b>{{ title.title }}</b>
          </h3>
          <!-- <h5 class="description-date">date</h5> -->
          {{ /*eslint-disable-next-line*/ }}
          <div>
            <p v-html="content"></p>
          </div>
        </div>
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
  box-sizing: border-box;
  min-width: 200px;
  margin: 0px;
  padding-bottom: 200px;

  .description-cover {
    background-position-x: center;
    background-size: 100% 350px;
    background-repeat: no-repeat;
    align-self: center;
  }

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

    .description-text {
      padding: 0px 40px;
      margin: 0px auto;
      justify-content: center;
      text-align: justify;

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
}
</style>
