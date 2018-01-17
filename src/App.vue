<template>
    <div id="app">
      <div class="container">
        <div class="rows">
          <div class="rows-item">1</div>
          <div class="rows-item">2</div>
          <div class="rows-item">3</div>
          <div class="rows-item"><</div>
        </div>
        <div class="rows">
          <div class="rows-item">4</div>
          <div class="rows-item">5</div>
          <div class="rows-item">6</div>
          <div class="rows-item"></div>
        </div>
        <div class="rows">
          <div class="rows-item">7</div>
          <div class="rows-item">8</div>
          <div class="rows-item">9</div>
          <div class="rows-item"></div>
        </div>
        <div class="rows">
          <div class="rows-item"></div>
          <div class="rows-item">0</div>
          <div class="rows-item">.</div>
          <div class="rows-item"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}
</style>
