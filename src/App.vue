<template>
  <div id="pokedex">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background: #E5E5E5;
}

*,
::after,
::before {
  box-sizing: border-box;
}


</style>
