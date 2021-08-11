<template>
  <div class="pop-up" v-if="show">
    <div class="pop-up__content">
      <p class="content"><slot></slot></p>
      <div class="pop-up__btns">
        <app-button @click="yes">Yes</app-button>
        <app-button-deny @click="no">No</app-button-deny>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-pop-up",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    yes() {
      this.$emit("yes", true);
    },
    no() {
      this.$emit("no", false);
    },
  },
};
</script>

<style scoped>
.pop-up {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.pop-up__content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-height: 20%;
  min-width: 30%;
}
.content {
  margin: 10px;
  text-align: center;
  font-size: 20px;
}
.pop-up__btns {
  display: flex;
  justify-content: flex-end;
  width: 90%;
}
.pop-up__btns button {
  margin: 10px;
}
</style>
