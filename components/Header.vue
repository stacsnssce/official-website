<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper primary-bg">
        <nuxt-link to="/" class="brand-logo">
          <img src="@/assets/images/logo.png">
        </nuxt-link>
        <a data-target="mobile-demo" class="sidenav-trigger button-collapse">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <nuxt-link to="/faculties/">
              Faculties
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activities/">
              Activities
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/awards/">
              Awards
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/newsletter/">
              Newsletter
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/gallery/">
              Gallery
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog/">
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/committee/">
              Committee
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul id="mobile-demo" class="sidenav sidenav-close">
      <li>
        <nuxt-link to="/" class="sidenav-close">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/faculties/">
          Faculties
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/activities/">
          Activities
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/awards/">
          Awards
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/newsletter/">
          Newsletter
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gallery/">
          Gallery
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog/">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/committee/" class="sidenav-close">
          Committee
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

<style lang="scss" scoped>
a {
  font-size: 18px;
  font-weight: 600;
}
</style>

<style lang="scss">
.sidenav-overlay {
  z-index: 0 !important;
}
</style>
