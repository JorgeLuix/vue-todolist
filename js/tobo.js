const { createApp } = Vue;

createApp ({
  data() {
    return {
      shoppingList: [],
      newItem: ''
    }
  },
  methods: {
    addItem() {
      completed= false;
      if (this.newItem.trim() !== '') {
        this.shoppingList.push(this.newItem.trim());
        this.newItem = '';
      }
      
    },
}
   
}).mount('#app')