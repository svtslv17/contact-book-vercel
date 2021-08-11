<template>
  <header>
    <h1 class="header-title"><slot></slot></h1>
  </header>
</template>

<script>
export default {
  name: "app-header-title",
};
</script>

<style scoped>
.header-title {
  font-size: 25px;
  width: 95%;
  padding: 20px;
  text-align: left;
  font-weight: bold;
}
</style>
