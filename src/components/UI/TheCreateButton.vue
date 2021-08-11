<template>
  <button class="create-button">
    <img src="@/img/plus.svg" alt="create contact" class="create-button__img" />
    Create contact
  </button>
</template>

<script>
export default {
  name: "the-create-button",
};
</script>

<style scoped>
.create-button {
  padding: 15px;
  border: 1px solid rgb(218, 178, 145);
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.create-button {
  background-color: rgb(255, 227, 175);
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.create-button__img {
  width: 20px;
  height: 20px;
  margin: 5px;
}
</style>
