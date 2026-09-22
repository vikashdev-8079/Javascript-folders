
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const todobtn = document.querySelector("#form-btn");
const taskCount = document.querySelector("#task-count");
const completeCount = document.querySelector("#complete-count");
const cancelBtn = document.querySelector("#cancel-btn")
todos = [
  {
    id: Date.now() + 1,
    text: "Go to gym",
    iscompleted: false,
  },
  {
    id: Date.now() + 2,
    text: "Take Class",
    iscompleted: false,
  },
  {
    id: Date.now() + 3,
    text: "Revision Class",
    iscompleted: false,
  },
];

let editTodoId = null;

function renderTodo() {
  todoList.textContent = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");

    li.className = "flex gap-2 border border-slate-300 p-4 rounded-xl";
    li.dataset.id = todo.id;

    li.innerHTML = `
                    <input type="checkbox" data-action = "toggle"${todo.iscompleted ? "checked" : ""}>
                    <p class="flex-1 ${todo.iscompleted ? "line-through text-red-400":""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action = "edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer" >Edit</button>
                        <button data-action = "delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer">Delete</button>
                    </div>
                `;
    todoList.append(li);
  });
  taskCount.textContent = `TASK : ${todos.length}`
  completeCount.textContent = `COMPLETED:${todos.filter((todo)=> todo.iscompleted).length}`
}
renderTodo();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  if (!todoValue) {
    return;
  }

  if (editTodoId) {
    todos = todos.map((todo) => {
      if (todo.id === Number(editTodoId)) {
        return {
          ...todo,
          text: todoValue,
        };
      }
      return todo;
    });
  } else {
    todos.push({
      id: Date.now(),
      text: todoValue,
      iscompleted: false,
    });
  }
  cancelEdit() 
  renderTodo();
});

todoList.addEventListener("click", (e) => {
  e.preventDefault();

  const li = e.target.closest("li");
  const id = li.dataset.id;
  const action = e.target.dataset.action;

  if (action === "delete") {
    deleteTodo(id);
  }

  if (action === "edit") {
    startTodo(id);
  }

  if(action === "toggle"){
    toggle(id)
   
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todo;
    }
  });
  renderTodo();
}



function  toggle(id){
     todos = todos.map((todo)=>{
        if(todo.id ===Number(id)){
            return{
                ...todo,
                iscompleted : !todo.iscompleted
            }
        }
        return todo
    })
    renderTodo()
}




function startTodo(id) {
  editTodoId = id;
  let currentTodo = todos.find((todo) => {
    if (todo.id === Number(id)) {
      return todo;
    }
  });
  todoInput.value = currentTodo.text;
  todobtn.textContent = "Update";
  todobtn.className = "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

  cancelBtn.classList.remove("hidden")
  renderTodo();
}


function cancelEdit(){
    editTodoId = ""
    todoInput.value = ""
    todobtn.textContent = "Add"

    todobtn.className = "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden")

}

cancelBtn.addEventListener("click",()=>{
    cancelEdit()
})
