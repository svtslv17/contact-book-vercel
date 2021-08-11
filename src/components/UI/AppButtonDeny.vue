<template>
  <button class="button-deny"><slot></slot></button>
</template>

<script>
export default {
  name: "app-button-deny",
};
</script>

<style scoped>
.button-deny {
  padding: 5px;
  margin-left: 15px;
  outline: none;
  background-color: #fff;
  border: rgb(255, 120, 120) solid 1px;
  color: rgb(255, 120, 120);
  border-radius: 5px;
  font-size: 16px;
}
</style>
