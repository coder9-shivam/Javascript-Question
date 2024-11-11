const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: '',
  dueDate: ''
}];

renderTodoList();   // To ensure that the to-do list is displayed on the page immediately when the code runs. 

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();   // If we delete some todo so it save to local Storage
        "
        class="delete-todo-button"
      >Delete</button>
    `;
    todoListHTML += html;
  }

  // console.log(todoListHTML);  // To display const html in console

  // localStorage.setItem('todoList', JSON.stringify(todoList));

  document.querySelector('.js-name-output')
    .innerHTML = todoListHTML;
}

function eventHandler(e) {
  if(e.key === 'Enter'){
    addTodo();
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  
  const name = inputElement.value;
  inputElement.value = '';  // this is for empty the input box after insert the value.

  const inputDateElement = document.querySelector('.js-due-date-input')

  const dueDate = inputDateElement.value;
  inputDateElement.value = '';
  

  todoList.push({
    name,
    dueDate
  });
  // console.log(todoList);

  renderTodoList();

  saveToStorage();

}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}