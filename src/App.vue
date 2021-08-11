<template>
  <div class="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap");
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-style: normal;
}
h1,
h2,
h3 {
  font-weight: normal;
}
input {
  padding: 5px;
  margin-left: 15px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(126, 235, 158);
  border-radius: 5px;
  font-size: 16px;
}
[v-cloak] {
  display: none;
}
</style>
