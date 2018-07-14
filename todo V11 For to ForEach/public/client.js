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
		
		this.todos.forEach(function(todo){
			if(todo.completed){
				completedTodos++;
				console.log(completedTodos);
			}
		});

      //make everything false
      if(completedTodos === totalTodos){	  
		  this.todos.forEach(function(todo){
			  todo.completed = false;
		  });
      }
      else{
		  this.todos.forEach(function(element){
			  element.completed = true;
		  });
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
	
	removeTodo: function(position){
		todoList.removeTodo(position);
		view.displayTodos();
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
		todoList.todos.forEach(function(todo, position){
			
			var todoLi = document.createElement('li');
			var displayText = '';
			
			if(todo.completed){
				displayText = '(x) '+todo.todoText;
			}
			else{
				displayText = '( ) '+todo.todoText;
			}
			
			todoLi.id = position;
			todoLi.textContent = displayText;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);			   
		}, this); //this here is the same as this in 112
	},
	
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	
	setupEventListeners: function(){
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event){
		var elementClicked = event.target;
		if(elementClicked.className === 'deleteButton'){
			var id = parseInt(elementClicked.parentNode.id);
			handlers.removeTodo(id);
		}
		});
	}
};

view.setupEventListeners();

//populate model
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
