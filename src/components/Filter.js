import React, { useState } from 'react'


const Filter = ({onFilter}) => {
    const [active, setActive] = useState(0)
    const buttons = ['All', 'Active', 'Done']

  const btnClickHandler = (ind)=>{
    setActive(ind);
    onFilter(ind);
    
  
  }
  const btnsOut = buttons.map((el,ind)=>(
    active==ind?
      // <button key={ind} onClick={()=>{setActive(ind); onFilter(active) }} type="button" className="btn btn-info">{el}</button> //первый вариант
      <button key={ind} onClick={()=> btnClickHandler(ind)} type="button" className="btn btn-info">{el}</button>
    :
      <button key={ind} onClick={()=> btnClickHandler(ind)} type="button" className="btn btn-outline-secondary">{el}</button>
  ))
  return (
    <div>
      <div className="btn-group">
            {btnsOut}
        </div>
    </div>
  )
}

export default Filter
