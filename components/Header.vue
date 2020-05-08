<template>
  <div>
    <nav>
      <div class="nav-wrapper #2979ff blue accent-3">
        <nuxt-link to="/" class="brand-logo">
          <img src="@/assets/images/logo.png">
        </nuxt-link>
        <nuxt-link to="#" data-target="mobile-demo" class="sidenav-trigger button-collapse">
          <i class="material-icons">menu</i>
        </nuxt-link>
        <ul class="right hide-on-med-and-down">
          <li>
            <nuxt-link to="/committee">
              Committee
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/faculties">
              Faculties
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activities">
              Activities
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/awards">
              Awards
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/newsletter">
              Newsletter
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/gallery">
              Gallery
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">
              Blog
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul id="mobile-demo" class="sidenav">
      <li>
        <nuxt-link to="/committee">
          Committee
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/faculties">
          Faculties
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/activities">
          Activities
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/awards">
          Awards
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/newsletter">
          Newsletter
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gallery">
          Gallery
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$materialize.sidenav()
  }
}
</script>

<style>

</style>
