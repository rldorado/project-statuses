<template>
  <div id="nav">
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/tasks">Tasks</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
/** LAYOUTS **/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.flex {
  display: flex;
}

.container {
  max-height: 100vh;
  max-width: 1024px;
  margin: 100px auto 400px;
}

p {
  font-size: 2rem;
}
</style>
