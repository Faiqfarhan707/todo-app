// var input = document.querySelector('#todo') 
// var list = document.querySelector('li')
// var arrtodo =[]


// function addtodo(){
//     arrtodo.push(input.value)
//     console.log(arrtodo)
// } 

function addTodo() {
    // Get the input value
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value;

    // Create a new list item
    var li = document.createElement('li');
    li.textContent = todoText;

    // Add the list item to the ul
    document.getElementById('todoList').appendChild(li);

    // Clear the input field
    todoInput.value = '';
}