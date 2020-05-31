<template>
  <div>
    Newsletter Description
    {{ this.$route.query.test /* Give a query test=something on the url */ }}
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'STACS Newsletter',
      meta: [
        { hid: 'description', name: 'description', content: 'News related to Department of Computer Science & Engineering and Students Association of Computer Science (STACS) containing the activities, events and other achievements of students' }
      ]
    }
  }
}
</script>

<style>

</style>
