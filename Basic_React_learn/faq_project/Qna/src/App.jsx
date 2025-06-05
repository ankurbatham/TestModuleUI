import React, { useState } from 'react'
import { question } from './test'
import Faqs from '../components/Faqs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showAns,setshowAns]=useState(question[0].id)
 const showNotification = ()=>{
toast.success("congrats");
 }
  return (
    <div>
      

     <ToastContainer></ToastContainer>
<Faqs></Faqs>
<button onClick={showNotification} >click</button>
      

      {/* BY NORMAL METHOD */}
      {/* <div className='container'>
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
      </div> */}
    </div>
    
  )
}

export default App
