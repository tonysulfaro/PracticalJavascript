// Code goes here

//Intro Videos
var todoList = {
  
    todos: [],
    
    displayTodo: function(){
      console.log('My Todos:',this.todos.todoText);
    },
    
    addTodo: function(text){
      this.todos.push({
        todoText: text,
        completed: false
      });
      this.displayTodo();
    },
    
    editTodo: function(index, newTodoText){
      this.todos[index].todoText = newTodoText;
      this.displayTodo();
    },
    
    removeTodo: function(index){
      this.todos.splice(index,1);
      this.displayTodo();
    },
    
    toggleCompleted: function(index){
      var selectedTodo = this.todos[index];
      selectedTodo.completed = !selectedTodo.completed;
      this.displayTodo();
    }
    
  };
  
//loops
for(var i = 0; i < todoList.todos.length; i++){
    console.log(todoList.todos[i].todoText);
}

todoList.todos.forEach(function(element){
    console.log(element.todoText);
});