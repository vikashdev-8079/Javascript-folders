const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const formbtn = document.querySelector("#form-btn");
const taskCount = document.querySelector("#task-count");
const taskComplete= document.querySelector("#complete-count");

let editTodoId = null;
let todos = [
  {
    id: Date.now() + 1,
    text: "Go to gym",
    isCompleted: false,
  },
  {
    id: Date.now() + 2,
    text: "Revision JavaScript",
    isCompleted: true,
  },
  {
    id: Date.now() + 3,
    text: "Take class",
    isCompleted: false,
  },
];

// Pahale se exsting todo ko render karea kar show karaya

//Creat Todo input===>
todoform.addEventListener("submit", (e) => {
  e.preventDefault();

  const todovalue = todoinput.value.trim();

  //if todovalue hai means "" then we do it !"" and ! logical not operator
  if(!todovalue){
    return
  }

  if(editTodoId){
    todos = todos.map((todo)=>{
      if(todo.id ===Number(editTodoId)){
        return{
          ...todo,
          text:todovalue
        }
      }
      return todo

    })

  }
  else{
    
  let newTodo = {
    id: Date.now(),
    text: todovalue,
    isCompleted: false,
  };
  todos.push(newTodo); // Add new todo


  }
  //  OR
  // todos.push(
  //   {
  //   id : Date.now(),
  //   text:todovalue,
  //   isCompleted:false
  //  }
  // )

todoinput.value = ""
  renderTodo(); //jab nay todo add hoga tab render hoga
});



function renderTodo() {
  todolist.innerHTML = "";
  todos.forEach(function (todo) {
    const li = document.createElement("li");

    // li.setAttribute("class","flex gap-2 border  border-slate-300 rounded-xl p-4")
    // oR
    li.className = "flex gap-2 border  border-slate-300 rounded-xl p-4";
    // li.setAttribute("data-id",todo.id)=>this is jugad
    // or
    li.dataset.id = todo.id; //rigth tarika

    li.innerHTML = `
            <input type="checkbox" data-action="toggle" ${todo.isCompleted ? "checked" : ""}>
            <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>
            <div class="flex gap-2">
              <button data-action="edit">Edit</button>
              <button data-action="delete">Delete</button>
            </div>`;
    todolist.append(li);
  });
  taskCount.textContent = `TASK:${todos.length}`
  taskComplete.textContent = `COMPLETED:${todos.filter((todo)=> todo.isCompleted).length }`
}
renderTodo(); //first time render hoga



//deleting todos==>
todolist.addEventListener("click", (e) => {
  e.stopPropagation();


  const li = e.target.closest("li");
  const id = li.dataset.id;

  let action = e.target.dataset.action


  if(action==="delete"){
    deleteTodo(id)
  }

  if(action==="edit"){
    startEdit(id)
 }

  if(action === "toggle"){
    todos = todos.map((todo)=>{
       if (todo.id === Number(id)) {
        return {
          ...todo,
          isCompleted :!todo.isCompleted
        }
      }
      return todo
    })
    renderTodo()
  }
 

});


//delete 
function deleteTodo(id){
   todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todo;
    }
  });
  renderTodo();
}


//Edit
function startEdit(id){
 editTodoId = id;
  let currentTodo = todos.find((todo)=>{
      if (todo.id === Number(id)) {
      return todo;
    }
    })
    todoinput.value = currentTodo.text
    formbtn.textContent = "Update"//add ko update 
  }










