<template>
  <app-header-title>Details</app-header-title>
  <contacts-form
    :contact="findContact($route.params.id)"
    @saveContact="editContact"
    :resetButtons="true"
  ></contacts-form>
</template>

<script>
import ContactsForm from "@/components/ContactsForm";

export default {
  components: {
    ContactsForm,
  },
  methods: {
    findContact(id) {
      return this.$store.getters.contacts.find((c) => c.id == id);
    },
    editContact(contact) {
      this.$store.dispatch("editContact", contact);
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
