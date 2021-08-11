<template>
  <div class="card">
    <div class="card-title">
      {{ contact.name }} <strong>{{ contact.lastname }}</strong>
    </div>
    <div>
      <app-button @click="$router.push(`/contact/${contact.id}`)">
        Details
      </app-button>
      <app-button-deny @click="show = true">
        Delete
      </app-button-deny>
      <app-pop-up
        :show="show"
        @yes="$store.dispatch('delContact', contact.id)"
        @no="show = false"
        >Do you really want to remove <strong>{{ contact.name }}</strong> from
        your contacts?</app-pop-up
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { show: false };
  },
};
</script>

<style scoped>
.card-title {
  font-size: 18px;
  width: 60%;
}
.card {
  padding: 15px;
  border: 1px solid rgb(145, 213, 218);
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
