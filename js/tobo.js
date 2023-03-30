const { createApp } = Vue;

createApp ({
  data() {
    return {
      shoppingList: [
        { text: 'Mele', done: false },
        { text: 'Arance', done: true },
        { text: 'Pere', done: false }
      ],
      newItem: '',
    }
  },
  methods: {
    addItem() {
      
      if (this.newItem.trim() !== '') {
        this.shoppingList.push({
            text: this.newItem.trim(),
            done: false
          });
          this.newItem = '';
      }
      
    },
    deleteItem(index) {
      this.shoppingList.splice(index, 1);
    },
    toggleDone(index) {
        this.shoppingList[index].done = !this.shoppingList[index].done;
    }
  }
 
}).mount('#app');