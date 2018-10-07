<template>
  <div>
    <NavBar/>
    <MoversLaggers v-if="$store.state.currentView == 'MoversLaggers'"/>
    <ExchangeStats v-if="$store.state.currentView == 'ExchangeStats'"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MoversLaggers from './components/MoversLaggers.vue'
import ExchangeStats from './components/ExchangeStats.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    MoversLaggers,
    ExchangeStats
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
}
</style>
