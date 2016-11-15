<template>
  <div id="vue-app">
    <header id="headline">
      <img src="./images/vue.png" width="120" />
    </header>
    <article id="file-size">
      <header>
        <h5>File Size</h5>
      </header>
      <ul>
        <file-item
          v-for="fileSize in fileSizes"
          :name="fileSize.name"
          :size="fileSize.size"
        ></file-item>
      </ul>
    </article>
    <article id="render">
      <header>
        <h5>Rendering</h5>
      </header>
      <button v-on:click="clickHandler" class="button-primary">Test</button>
      <div class="render-timer">TIMER: {{ timer }}s</div>
      <div class="render-item-container">
        <render-item
          v-for="index of renderItems"
          :key="$index"
          :index="index"
          :onFinish="renderFinishHandler"
        />
      </div>
    </article>
  </div>
</template>

<script>
  import FileItem from './FileItem.vue';
  import RenderItem from './RenderItem.vue';

  export default {
    components: {
      FileItem,
      RenderItem
    },

    methods: {
      clickHandler: function () {
        this.rendered = 0;
        this.renderItems = Array.apply(null, { length: 10000 }).map(Number.call, Number);
        this.renderTime = new Date();
      },

      renderFinishHandler: function () {
        this.rendered++;
        if (this.rendered >= 10000) {
          this.timer = (new Date() - this.renderTime) / 1000;
        }
      }
    },

    data () {
      return {
        rendered: 0,
        renderTime: 0,
        timer: 0,
        renderItems: [],
        fileSizes: [
          { name: 'vue@2.0.5', size: 195 }
        ]
      }
    }
  }
</script>

<style lang="sass">
  $primary-color: #41B883

  #vue-app
    h1, h2, h3, h4, h5, h6
      color: $primary-color

</style>
