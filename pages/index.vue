<template>
  <div>
    Home
  </div>
</template>
<script>
export default {
  mounted () {
    this.$materialize.carousel()
  },
  head () {
    return {
      title: 'STACS | Department of Computer Science And Engineering | NSSCE',
      meta: [
        { hid: 'description', name: 'description', content: 'An association of students in Department of Computer Science at NSS College of Engineering where they can develop their technical knowledge and share their talents within' }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
