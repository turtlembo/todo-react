import React, { useState } from 'react'

const AddItem = ({onAdd}) => {
  const [value, setValue] = useState('')
  

  

  return (
    <div className="item-add-form d-flex">
        <input onChange={(e)=>setValue(e.target.value)} id='text' type="text" className="form-control" placeholder="What need to be done" value={value}/>
        <button onClick={()=>{onAdd(value); setValue("")}} className="btn btn-outline-secondary col-3">Add Item</button>
    </div>

  )
}

export default AddItem
