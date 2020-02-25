

const TodoEditor = function(todos = []) {
  this.todos = todos;
};

TodoEditor.prototype.saveTodo = function(todo){
  this.todos.push(todo);
};

const todoEditor = new TodoEditor();

todoEditor.saveTodo({text: 'new text'});

console.log(todoEditor)