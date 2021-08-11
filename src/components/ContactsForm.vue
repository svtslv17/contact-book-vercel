<template>
  <form class="contact-form" @submit.prevent>
    <app-pop-up
      :show="isShownPopUpDelete"
      @yes="deleteField(deletedFieldKey)"
      @no="isShownPopUpDelete = false"
      >Remove field <strong>{{ deletedFieldKey }}</strong
      >?</app-pop-up
    >
    <app-pop-up
      :show="isShownPopUpReturn"
      @yes="returnFields()"
      @no="isShownPopUpReturn = false"
      >Return fields?</app-pop-up
    >
    <div class="fields">
      <div v-if="resetButtons">
        <app-button-deny @click="isShownPopUpReturn = true"
          >Return</app-button-deny
        >
        <app-button-deny
          v-if="lastChangedField !== '' && firstFocusInput"
          @click="returnLastChanges"
        >
          Step back
        </app-button-deny>
      </div>
      <div
        class="fields__item"
        v-for="(field, idx) in Object.entries(newContact)"
        :key="idx"
      >
        <div class="field" v-if="field[0] !== 'id'">
          <div>{{ field[0] }}:</div>
          <input
            type="text"
            :placeholder="field[1]"
            v-model="newContact[`${field[0]}`]"
            @input="firstFocusInput = true"
          />
          <app-button-deny
            v-if="field[0] !== 'name'"
            @click="Confirmation(field[0])"
          >
            Delete
          </app-button-deny>
        </div>
      </div>
      <div class="custom-field" v-for="(custom, idx) in customs" :key="idx">
        <input type="text" placeholder="Title" v-model="custom[0]" />
        :
        <input type="text" placeholder="Value" v-model="custom[1]" />
        <app-button-deny @click="delCustom(idx)">
          Delete
        </app-button-deny>
      </div>
      <app-button class="custom-btn" @click="addCustom">
        Add custom field
      </app-button>
    </div>
    <the-save-button @click="saveContact"></the-save-button>
  </form>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },

    resetButtons: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  mounted() {
    this.newContact = Object.assign({}, this.contact);
    this.lastChangedField = "";
  },
  data() {
    return {
      newContact: {
        name: "",
        lastname: "",
      },
      customs: [],
      lastChangedField: "",
      firstFocusInput: false,
      isShownPopUpDelete: false,
      deletedFieldKey: "",
      isShownPopUpReturn: false,
    };
  },
  methods: {
    Confirmation(field) {
      this.deletedFieldKey = field;
      this.isShownPopUpDelete = true;
    },
    delCustom(id) {
      this.customs.splice(id, 1);
    },
    addCustom() {
      this.customs.push(["", ""]);
    },
    deleteField(fieldKey) {
      delete this.newContact[fieldKey];
      this.deletedFieldKey = "";
      this.isShownPopUpDelete = false;
    },
    returnFields() {
      this.newContact = Object.assign({}, this.contact);
      this.isShownPopUpReturn = false;
    },
    returnLastChanges() {
      this.newContact[this.lastChangedField] = this.contact[
        this.lastChangedField
      ];
    },
    saveContact() {
      let savedContact = {};
      if (this.newContact.name === "") {
        this.newContact = Object.assign({}, this.contact);
      }
      if (!this.newContact.id) {
        this.newContact.id = Date.now();
      }
      this.customs = this.customs.filter((field) => field[0] !== "");
      if (this.newContact !== {} && this.customs !== []) {
        savedContact = Object.fromEntries([
          ...Object.entries(this.newContact),
          ...this.customs,
        ]);
      } else if (this.customs === []) {
        savedContact = this.newContact;
      }
      this.$emit("saveContact", savedContact);
    },
  },
  computed: {
    computedNewContact: function() {
      return Object.assign({}, this.newContact);
    },
  },
  watch: {
    computedNewContact: {
      handler(newC, oldC) {
        for (let field in oldC) {
          if (oldC[field] !== newC[field]) {
            this.lastChangedField = field;
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form-title {
  font-size: 20px;
  padding: 20px;
  width: 100%;
}
.contact-form,
.create-btn {
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
.create-btn {
  background-color: rgb(255, 227, 175);
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.create-btn__img {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.custom-field,
.fields__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fields__item {
  width: 100%;
}
.field-title {
  margin-right: 10px;
}
.custom-field {
  display: flex;
  align-items: center;
}
.fields {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
input {
  margin: 5px;
}
.custom-btn {
  margin: 8px 0;
}
</style>
