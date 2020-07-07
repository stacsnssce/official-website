<template>
  <footer class="page-footer #37474f blue-grey darken-3">
    <div class="container">
      <div class="row ">
        <div class="col l6 s12">
          <h5 class="white-text">
            Navigation
          </h5>
          <ul>
            <li>
              <nuxt-link to="/" class="grey-text text-lighten-3">
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/newsletter" class="grey-text text-lighten-3">
                Newsletter
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallery" class="grey-text text-lighten-3">
                Gallery
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog" class="grey-text text-lighten-3">
                Blog
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">
            Links
          </h5>
          <ul>
            <li>
              <a href="http://nssce.ac.in" class="grey-text text-lighten-3">
                NSSCE
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCeqyrVwWzEWvBjT-u3epw3w" class="grey-text text-lighten-3">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://github.com/stacsnssce/official-website" class="grey-text text-lighten-3">
                Website Source
              </a>
            </li>
            <li>
              <a href="/contributors" class="grey-text text-lighten-3">
                Contributors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright #263238 blue-grey darken-4">
      <div class="container center">
        STACS NSSCE © 2020
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
li {
  font-size: 18px;
}

.footer-copyright {
  font-size: 16px;
  font-weight: 600;
}

h5 {
  font-size: 28px;
  font-weight: 600;
  text-decoration: underline;
}
</style>
