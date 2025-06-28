import React, { useState } from 'react';

function App() {
  const [text, settext] = useState();
let count = (e)=>{
  settext(e.target.value)
}
  return (
    <div>
      <h1>you typed {text.length}</h1>
      <input type="text" placeholder='...type' onChange={count}/ >

    </div>
  );
}

export default App;
