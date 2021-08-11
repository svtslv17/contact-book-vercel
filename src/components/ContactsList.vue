<template>
  <div class="contacts">
    <contacts-item
      v-for="contact in $store.getters.contacts"
      :key="contact.id"
      :contact="contact"
    >
    </contacts-item>
  </div>
</template>

<script>
import ContactsItem from "./ContactsItem.vue";
export default {
  components: { ContactsItem },
};
</script>

<style></style>
