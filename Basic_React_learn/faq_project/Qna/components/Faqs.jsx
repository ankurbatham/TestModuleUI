import React from 'react'

function Faqs() {
  return (
    <div>
      <h1>Frequently asked question(FAQs)</h1>
      <div className="faqOuter">
       <FaqInner></FaqInner>
       <FaqInner></FaqInner>
      <FaqInner></FaqInner>
      <FaqInner></FaqInner>
      </div>
    </div>
  )
}

export function FaqInner(){
 return(
   <div className="faqInner">
            <h2 >hello</h2>
            <p ></p>
          </div>
 )
}

export default Faqs 

 


