import React, { useEffect, useState } from 'react';

import { FaArrowUp } from "react-icons/fa";


function App() {

  const [show, setShow]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 400){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  },[show])


  const scrollTop=()=>{
    window.scroll({top:0, behavior:'smooth'}) 
  }

  return (
    <div>
      <section id='a'>first</section>
      <section id='b'>second</section>
      <section id='c'>third</section>
      <section id='d'>fourth</section>

      <button  
      onClick={scrollTop}
      className={`${show ?'to-top active' :'to-top'}`}>
        <FaArrowUp />
      </button>
      
    </div>
  )
}

export default App