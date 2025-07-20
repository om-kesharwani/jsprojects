let todolist=[{item:'Buy Milk', 
  duedate:'1-4-5'},{item:'visit bombay',duedate:'4-5-6'}];
displayItems();
function addtodo()
{
  let inputElement = document.querySelector('#t1');
  let todoitem=inputElement.value;
  let tododate = document.querySelector('#todo-date');
  let td=tododate.value;
  todolist.push({item:todoitem,duedate:td});
  inputElement.value='';
  tododate.value='';
  displayItems();
}
function displayItems()
{
  let containerElement =document.querySelector('.todo-container');
  let newhtml='';
  for(let i=0;i< todolist.length;i++)
  { 
    let{item,duedate} =todolist[i];
    newhtml+=`
    
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-delete" onclick="todolist.splice(${i},1);
    displayItems();">Delete</button>
    `
  }
  containerElement.innerHTML=newhtml;

}
