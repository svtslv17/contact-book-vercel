<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style scoped>
.button {
  padding: 5px;
  margin-left: 15px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(126, 235, 158);
  color: rgb(26, 161, 116);
  border-radius: 5px;
  font-size: 16px;
}
</style>
