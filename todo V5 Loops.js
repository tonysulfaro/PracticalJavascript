// Code goes here

//Intro Videos
var todoList = {
  
    todos: [],
    
    displayTodos: function(){

      if(this.todos.length === 0){
        console.log('there are no todos.');
      }
      else{
        console.log('My Todos:');
        for(var i = 0; i< this.todos.length; i++){
          if(this.todos[i].completed === true){
            console.log('(x)', this.todos[i].todoText);
          }
          else{
            console.log('( )', this.todos[i].todoText);
          }
        }
      }
    },
    
    addTodo: function(text){
      this.todos.push({
        todoText: text,
        completed: false
      });
      this.displayTodos();
    },
    
    editTodo: function(index, newTodoText){
      this.todos[index].todoText = newTodoText;
      this.displayTodos();
    },
    
    removeTodo: function(index){
      this.todos.splice(index,1);
      this.displayTodos();
    },
    
    toggleCompleted: function(index){
      var selectedTodo = this.todos[index];
      selectedTodo.completed = !selectedTodo.completed;
      this.displayTodos();
    }
    
  };
  
  
//populate model
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
  
//loops
for(var i = 0; i < todoList.todos.length; i++){
    console.log(todoList.todos[i].todoText);
}

//todoList.todos.forEach(function(element){
  //  console.log(element.todoText);
//});