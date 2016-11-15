<template>
  <div v-once class="render-item">{{ index }}</div>
</template>

<script>
  export default {
    props: [ 'index', 'onFinish' ],

    mounted () {
      this.onFinish();
    }
  }
</script>
