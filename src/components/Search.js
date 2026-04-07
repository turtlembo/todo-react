import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

const Search = ({onSearch}) => {

  const [value,setValue] = useState('')

  return (
        <input onChange={(e)=>{setValue(e.target.value); onSearch(e.target.value)}} type="text" placeholder="Type to search" className="form-control search-input" value={value}/>    
  )
}

export default Search
