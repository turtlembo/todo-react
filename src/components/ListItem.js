import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

const ListItem = ({item}) => {
    const clickHandler = (event) =>{
        
        const id = event.target.closest('.list-group-item')
    }
  return (
    <li className="list-group-item">
        <span className={`todo-list-item  ${item.done ? 'done' : ''}  ${item.important ? 'important': '' }`}>
            <span className="todo-list-item-label">{item.title}</span>
            <button onClick={clickHandler} type="button" className="btn btn-outline-success btn-sm float-end">
                        ❕
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm float-end">
                        🗑
            </button>
        </span>
    </li>
  )
}

export default ListItem
