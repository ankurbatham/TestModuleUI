import React, { useState } from 'react'
import { question } from '../src/test'
function Faqs() {
  let[currentId , setcurrentId] = useState(question[0].id)
let items = question.map((itemdata,i)=>{
  let itemDetails = {
  itemdata , 
  currentId ,
  setcurrentId
  }
 return( <FaqItem itemDetails = {itemDetails} key={i}></FaqItem>)
})
  return (
    <div>
      <h1>Frequently asked question(FAQs)</h1>
      <div className="faqOuter">
       {items}
      </div>
    </div>
  )
}
 
function FaqItem({itemDetails}){
  return(
      <div className="faqInner">
            <h2 onClick={()=>itemDetails.setcurrentId(itemDetails.itemdata.id)}>{itemDetails.itemdata.question}</h2>
            <p className={itemDetails.currentId===itemDetails.itemdata.id ? 'viewAns':""}>{itemDetails.itemdata.answer}</p>
          </div>
  )
}


export default Faqs 

 


