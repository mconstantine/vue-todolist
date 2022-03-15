const app = new Vue({
  el: "#root",
  data: {
    newTodo: {
      text: "",
      done: false,
    },
    todosList: [
      {
        text: "Lavare i marciapiedi",
        done: false,
      },
      {
        text: "Cercare le papere",
        done: true,
      },
    ],
  },
  methods: {
    addTodo() {
      this.todosList.unshift({ ...this.newTodo });
      this.newTodo.text = "";
    },
    toggleDoneState(index) {
      const todoItem = this.todosList[index];
      todoItem.done = !todoItem.done;
    },
    removeTodo(index) {
      this.todosList = this.todosList.filter(function (_todo, todoIndex) {
        // if (index === todoIndex) {
        //   return false;
        // } else {
        //   return true;
        // }

        return index !== todoIndex;
      });
    },
  },
});
