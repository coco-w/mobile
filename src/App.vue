<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
  }
}
</script>
<style>
html,body,#app{
  min-height: 100%;
}
html {
  background: #f0f0f0;
}
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
