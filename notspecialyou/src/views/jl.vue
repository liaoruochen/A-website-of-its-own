<template>
  <div>
    <pdf class="jianli" src="../../static/lrc.pdf"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  }
}
</script>

<style scoped>
.jianli{
  width: 70%;
  margin: 0 auto
}
</style>
