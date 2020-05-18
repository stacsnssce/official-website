import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

<template>
  <div class="container-box">
    <div class="container">
      <div class="About">
        <p>
          Students' Association of Computer Science (STACS) is the departmental association of both B.Tech and M.Tech students of the Computer Science and Engineering Department. This association will be an integration of students into academic communities at the department level, crossing the course boundary, providing a platform to organise a range of activities with the support and resources of the department. The association will provide opportunities for students to share a range of extra-curricular experiences.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.container-box{
  color: #ffffff;
  background-color: #2979FF !important;

}

.About{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-style: inherit;
    font-size: 120%;
    text-align:justify;
}
</style>
