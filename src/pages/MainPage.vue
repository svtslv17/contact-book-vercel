<template>
  <app-header-title>Contact list</app-header-title>
  <the-create-button
    v-if="!onPushCreateButton"
    @click="switchForm"
  ></the-create-button>
  <contacts-form
    v-else
    :contact="defaultContact"
    :resetButtons="false"
    @saveContact="addContact"
  ></contacts-form>
  <contacts-list></contacts-list>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsList,
    ContactsForm,
  },
  data() {
    return {
      onPushCreateButton: false,
      defaultContact: {
        name: "",
      },
    };
  },
  methods: {
    switchForm() {
      this.onPushCreateButton = !this.onPushCreateButton;
    },
    addContact(contact) {
      this.$store.dispatch("addContact", contact);
      this.onPushCreateButton = !this.onPushCreateButton;
    },
  },
};
</script>

<style></style>
