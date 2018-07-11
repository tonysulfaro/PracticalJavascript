//Intro Videos
var todoList = {
  
    todos: ['item 1','item 2','item 3'],
    
    displayTodos: function(){
      console.log('My Todos:',this.todos);
    },
    
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    },
    
    editTodo: function(index, newTodo){
      this.todos[index] = newTodo;
      this.displayTodos();
    },
    
    removeTodo: function(index){
      this.todos.splice(index,1);
      this.displayTodos();
    }
    
  };
  

//objects
var BobDoe = {
    height: 5.5,
    weight: 154,
    Name: "Bob Doe",
    Birthday: new Date(1995,5,5),

    //functions
    sayName: function(){
        console.log('Name is:',this.Name);
    },

    editName: function(newName){
        Name = newName;
        this.sayName();
    }
}

//looping
for(var i = 0; i < 5; i++){
    console.log(i);
}

//over an array
for(var i = 0; i< todoList.todos.length; i++){
    console.log(todoList.todos[i]);
}