<template>
  <div>
    <h2>{{ $store.state.currentExchange }} coins</h2>
    {{ show }}
    {{ currentPeriod }}
    <button class="button"
      v-for="period in periods"
      @click="changePeriod(period)"
      :class="{'is-focused': period == currentPeriod}"
      >
      MA{{ period}}
    </button>

    <div class="select">
      <select>
        <option>all</option>
        <option>recent</option>
        <option>today</option>
      </select>
    </div>

    <MoversLaggersTable/>
  </div>
</template>

<script>
import MoversLaggersTable from './MoversLaggersTable.vue'

export default {
  name: 'MoversLaggers',
  components: {
    MoversLaggersTable
  },
  data() {
    return {
      periods: [10, 20, 30, 50, 100, 200, 250],
      show: 'all',
      currentPeriod: 20
    }
  },
  methods: {
    changePeriod(period) {
      this.currentPeriod = period
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
