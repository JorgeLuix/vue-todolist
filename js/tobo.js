const { createApp } = Vue;

createApp ({
  data() {
    return {
      shoppingList: [],
      newItem: ''
    }
  },
}).mount('#app')