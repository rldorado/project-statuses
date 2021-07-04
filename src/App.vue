<template>
  <div id="nav">
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/tasks">Tasks</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
/** FONTS **/

@font-face {
  font-family: Inter Regular;
  src: url("./assets/fonts/Inter-Regular.otf") format("embedded-opentype"),/* Internet Explorer */ 
    url("./assets/fonts/Inter-Regular.woff") format("woff"), /* Pretty Modern Browsers */ 
    url("./assets/fonts/Inter-Regular.woff2") format("woff2"); /* Super Modern Browsers */
  font-weight: 400;
  font-style: normal;
}

/** LAYOUTS **/

#app {
  font-family: Inter Regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flexy-center {
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Responsive layout */
@media (max-width: 1020px) {
  .row {
    flex-direction: column;
    flex-wrap: nowrap;
  }
}

.container {
  max-height: 100vh;
  margin: 100px auto;
}
</style>
