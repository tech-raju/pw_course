const body = document.querySelector('body')
const nightModeToggleBtn = document.querySelector('#nightModeToggle')
let nightMode = false

function nightModeToggle(){
  if(nightMode){
    body.style.backgroundColor = "white"
    nightModeToggleBtn.innerHTML = "Dark Mode"
    nightMode = false
    body.style.color = "black"
  }else{
    body.style.backgroundColor = "black"
    nightModeToggleBtn.innerHTML = "Light Mode"
    nightMode = true
    body.style.color = "white"
  }
}

nightModeToggleBtn.addEventListener("click",nightModeToggle)

// add list here

const parentTodoList = document.querySelector("#todoList")
const addTodo = document.querySelector("#addTodo")
const newTodo = document.querySelector("#newTodo")

let todoList = []

// render list 

function renderList(anything){
  let index = 1
  parentTodoList.innerHTML = ""
  for (let list of anything) {
    let div = document.createElement('div')
    div.className = 'task'
    let todoItem = document.createElement('li')
    let todoStatus = document.createElement('button')
    todoStatus.innerText = "STATUS:" + list.status
    todoItem.innerText = index + ". " + list.title
    todoStatus.addEventListener('click',() => {
      if(todoStatus.innerText === "STATUS: COMPLETED"){
        todoStatus.innerText = "STATUS: PENDING"
      }else{
        todoStatus.innerText = "STATUS: COMPLETED"
      }
    })
    // console.log(todoItem)
    div.append(todoItem,todoStatus)
    parentTodoList.append(div)
    index++
  }
}
renderList(todoList)

addTodo.addEventListener('click',function(){
  const valueOfNewTodo = newTodo.value // taking value of input
  const task = {title:valueOfNewTodo, status:"PENDING"}
  todoList.unshift(task) // add to array
  // console.log(valueOfNewTodo)
  renderList(todoList)
})