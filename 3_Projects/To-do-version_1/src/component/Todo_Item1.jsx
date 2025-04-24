function Todo_item1(){
  let todoname = 'BUY MILK';
  let todoDate = '6/10/2025'
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

export default Todo_item1