<template>
  <li>
    <span class="dim">{{ name }}</span> -
    <b>{{ size }}kb</b>
  </li>
</template>

<script>
  export default {
    props: [ 'name', 'size' ]

  }
</script>
