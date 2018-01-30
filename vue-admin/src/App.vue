<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" img-set="/static/favicon.ico"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{

  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
@import './assets/css/resetMintUi.css';
</style>
