var todoList = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    todos =[],
    i = 0;

form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  evt.preventDefault();
  
  //This creates a div
  var todo = document.createElement('div');
  
  //This makes that text become a span
  var todoText = document.createElement('span');
  todoText.innerText = text;
  
  //This creates the edit button
  var todoEdit = document.createElement('button');
  todoEdit.innerText = 'Edit';
  todoEdit.dataset.index = i;
  
  //This creates the delete button
  var todoDelete = document.createElement('button');
  todoDelete.innerText = 'Delete';
  todoDelete.dataset.index = i;
  
  //This creates the done button
  var todoDone = document.createElement('button');
  todoDone.innerText = 'Done';
  todoDone.dataset.index = i;
  
  //This allows users to edit an item on the list, if the edit button is pressed. If the user hits
  //enter, then the item is no longer editable.
  todoEdit.onclick = function(evt){
    var current = todos[evt.target.dataset.index];
    var text = current.childNodes[0];
    text.contentEditable = true;
    document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 13){
      text.contentEditable = false;
    }
  });
  //  text.style.display = 'none';
  };
  
  //When the user hits the delete button, the whole div containing the item and the buttons is removed.
  todoDelete.onclick = function(evt){
    var current = todos[evt.target.dataset.index];
    var text = current.childNodes[0];
    todo.parentNode.removeChild(todo);
  //  text.style.display = 'none';
  };
  
  //When the user hits the don button, the item is crossed out
  todoDone.onclick = function(evt){
    var current = todos[evt.target.dataset.index];
    var text = current.childNodes[0];
    text.style.setProperty("text-decoration", "line-through");
  };
  
  //This attached the text and three buttons to the div
  todo.appendChild(todoText);
  todo.innerHTML += ' ';
  todo.appendChild(todoEdit);
  todoList.appendChild(todo);
  todos.push(todo);
  todo.appendChild(todoDelete);
  todo.appendChild(todoDone);
  i++;
}, false);

//todoText.onclick = function(evt){
  // evt.target.style.setProperty("text-decoration", "line-through");
   //todoList.onclick = function(evt){
     //var tar = evt.target;
     //tar.parentNode.removeChild(tar);
     //evt.preventDefault();
   //};
 //};