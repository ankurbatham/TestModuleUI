import React, { useState } from 'react'
import { question } from './test'

function App() {
  const [showAns,setshowAns]=useState(question[0].id)
  return (
    <div>
      <div className='container'>
        <h1>Frequently asked question(FAQs)</h1>
        <div className="faqOuter">

          {question.map((faqInner,i)=>{
            return(
               <div className="faqInner">
            <h2 onClick={()=>setshowAns(faqInner.id)}>{faqInner.question}</h2>
            <p className={showAns==faqInner.id ? 'viewAns': ""}>{faqInner.answer}</p>
          </div>

            )
          })}
         


        </div>
      </div>
    </div>
  )
}

export default App
