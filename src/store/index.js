import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      contacts: [
        {
          id: 1,
          name: "Freddie",
          lastname: "Mercury",
          number: "+375334569032",
          email: "test@test.com",
          address: "New-York, Broadway street 98-5",
        },
        {
          id: 2,
          name: "Robert",
          lastname: "Plant",
          number: "+375334569032",
          email: "test@test.com",
          address: "London, Chemberton street 98-5",
        },
        {
          id: 3,
          name: "Glenn",
          lastname: "Hughes",
          number: "+375334569032",
          email: "test@test.com",
          address: "Los-Angeles, Hrushchov street 98-5",
        },
        {
          id: 4,
          name: "John",
          lastname: "Lennon",
          number: "+375334569032",
          email: "test@test.com",
          address: "Moscow, Murmanskaya street 98-5",
        },
      ],
    };
  },
  actions: {
    addContact({ commit }, contact) {
      commit("ADD_CONTACT", contact);
    },
    delContact({ commit }, id) {
      commit("DEL_CONTACT", id);
    },
    editContact({ commit }, contact) {
      commit("EDIT_CONTACT", contact);
    },
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      if (contact.name !== "" && contact.name) {
        state.contacts = [...state.contacts, contact];
      }
    },
    DEL_CONTACT(state, id) {
      let delIdx = state.contacts.findIndex((c) => c.id == id);
      state.contacts.splice(delIdx, 1);
    },
    EDIT_CONTACT(state, contact) {
      let editIdx = state.contacts.findIndex((c) => c.id === contact.id);
      state.contacts.splice(editIdx, 1, contact);
    },
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
  },
});
