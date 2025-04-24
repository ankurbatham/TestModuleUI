import AppName from "./component/AppName" 
import AddTodo from "./component/addTodo" 
import Todo_item1 from "./component/Todo_Item1"
import Todo_Item_2 from "./component/Todo_Item2"
import './App.css';

function App() {


  return <center class="to-do-container">
    <AppName/>
   <AddTodo/>
   <div className="todo-items">
     <Todo_item1/>
   <Todo_Item_2/>
   </div>
  
   
  </center>
  
}

export default App
