// Code goes here

//Intro Videos
var todoList = {
  
    todos: [],
    
    addTodo: function(text){
      this.todos.push({
      	todoText: text,
        completed: false
      });
      view.displayTodos();
    },
    
    editTodo: function(index, newTodoText){
      this.todos[index].todoText = newTodoText;
      view.displayTodos();
    },
    
    removeTodo: function(index){
      this.todos.splice(index,1);
      view.displayTodos();
    },
    
    toggleCompleted: function(index){
      var selectedTodo = this.todos[index];
      selectedTodo.completed = !selectedTodo.completed;
      view.displayTodos();
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
		view.displayTodos();
    }
    
  };

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
  
//show view for todo list
var view = {
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		
		for(var i = 0; i < todoList.todos.length; i++){
			
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var displayText = '';
			
			if(todo.completed){
				displayText = '(x) '+todo.todoText;
			}
			else{
				displayText = '( ) '+todo.todoText;
			}
			
			todoLi.textContent = displayText;
			todosUl.appendChild(todoLi);
		}
	}
};

//for debugging purposes
function runWithDebugger(functionToRun){
	debugger;
	functionToRun();
}
/*
//timer
function setTimeoutFunction(functionToRun){
	setTimeout(functionToRun();,5000);
}
*/
//foreach loop
todoList.todos.forEach(function(todo){
	console.log(todo);
})

//foreach function
function forEach(myArray, myFunction){
	for(var i = 0; i < myArray.length; i++){
		myFunction(myArray[i]);
	}
}
  
//populate model
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
