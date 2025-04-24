function Todo_Item_2(){
let todoname = 'GO TO COLLEGE'
let todoDate = '15/10/2025'
return <div class="container ">
  
<div class="row item-row">
  <div class="col-5">
  {todoname}
  </div>
  <div class="col-4">
    {todoDate}
  </div>
  <div class="col-2">
  <button type="button" className="btn btn-danger our-button">DELETE</button>
  </div>
</div>
</div> 
}

export default Todo_Item_2