import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'

const ListItem = ({item, onDeleteItem, onDoneItem,onImportantItem,}) => {

  
  return (
    <li className="list-group-item">
        <span className={`todo-list-item  ${item.done ? 'done' : ''}  ${item.important ? 'important': '' }`}>
            <span onClick={()=>onDoneItem(item.id)} className="todo-list-item-label">{item.title}</span>
            <button onClick={()=>onImportantItem(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
                        ❕
            </button>
            <button onClick={()=> onDeleteItem(item.id)} type="button" className="btn btn-outline-danger btn-sm float-end">
                        🗑
            </button>
        </span>
    </li>
  )
}

export default ListItem
