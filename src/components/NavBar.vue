<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Movers & Laggers
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"
              v-for="exchange in exchanges"
              @click="changeExchange(exchange)"
              :class="{'is-active': currentExchange == exchange}">
              {{ exchange }}
            </a>
          </div>
        </div>

        <a class="navbar-item"
          @click="changeView('ExchangeStats')">
          Exchange Stats
        </a>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      exchanges: ['Binance', 'Bittrex', 'Kucoin']
    }
  },
  computed: {
    currentExchange() {
      return this.$store.state.currentExchange
    }
  },
  methods: {
    changeExchange(e) {
      this.$store.commit('changeExchange', e)
      this.changeView('MoversLaggers')
    },
    changeView(view) {
      this.$store.commit('changeView', view)
    }
  },
  mounted() {
    this.changeExchange('Binance')
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
