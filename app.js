var todoInp = document.getElementById('todoInp');
var todoList = document.getElementById('todoList');


function addTodo() {
    var inpValue = todoInp.value;  
    var todoLi = document.createElement('li');
    todoLi.setAttribute('class', 'liStyle');
    var txt = document.createTextNode(inpValue);
    todoLi.appendChild(txt);
    todoList.appendChild(todoLi);
    todoInp.value = "";

    //create div for buttons(delete , edit)
    var btnDiv = document.createElement('div')
    todoLi.appendChild(btnDiv)
    btnDiv.setAttribute('class','divStyle')


    //creation of button(delete)
    var deleteBtn = document.createElement('button')
    var deleteTxt = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteTxt)
    btnDiv.appendChild(deleteBtn)
    deleteBtn.setAttribute('class','btn')
    deleteBtn.setAttribute('onclick','deleteTodoList(this)')

    //creation of button(edit)
    var editBtn = document.createElement('button')
    var editTxt = document.createTextNode('Edit')
    editBtn.appendChild(editTxt)
    btnDiv.appendChild(editBtn)
    // parent.appendChild(todoLi)
    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editTodoList(this)')
}

function deleteTodoList(deleteBtn){
  deleteBtn.parentNode.remove()
}

function editTodoList(editBtn){
 editBtn.parentNode.firstChild.nodeValue = prompt("Please edit your text here..")
}

function deleteAll(){
  todoList.innerHTML = "";
} 