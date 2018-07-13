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
    },

    toggleAll: function(){
      var totalTodos = this.todos.length;
      var completedTodos = 0;

      //count completed todos
      for(var i = 0; i < totalTodos; i++){
        if(this.todos[i].completed){
          completedTodos++;
        }
      }

      //make everything false
      if(completedTodos === totalTodos){
        for(i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
      }
      else{
        for(i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }

      this.displayTodos();
    }
    
  };
  
  
//populate model
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');

/*
//linked elements
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

//event listeners
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
*/

//event handlers
var handlers = {
	displayTodos: function(){
		todoList.displayTodos();
	},
	
	toggleAll: function(){
		todoList.toggleAll();
	},
	
	addTodo: function(){
		var addTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTextInput.value);
		addTextInput.value = '';
	},
	
	editTodo: function(){
		var position = document.getElementById('editTodoPosition');
		var newText = document.getElementById('editTodoText');
		todoList.editTodo(position.valueAsNumber, newText.value);
		position.value = '';
		newText.value = '';
	},
	
	removeTodo: function(){
		var position = document.getElementById('removeTodoPosition');
		todoList.removeTodo(position.valueAsNumber);
		position.value = '';
	},
	
	toggleTodoComplete: function(){
		var position = document.getElementById('toggleCompletePosition');
		todoList.toggleCompleted(position.valueAsNumber);
		position.value = '';
	}
};
  