import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'

const ListItem = ({item, onDeleteList, onDoneList, onImportantList}) => {

  
  return (
    <li className="list-group-item">
        <span className={`todo-list-item  ${item.done ? 'done' : ''}  ${item.important ? 'important': '' }`}>
            <span onClick={()=>onDoneList(item.id)} className="todo-list-item-label">{item.title}</span>
            <button onClick={()=>onImportantList(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
                        ❕
            </button>
            <button onClick={()=> onDeleteList(item.id)} type="button" className="btn btn-outline-danger btn-sm float-end">
                        🗑
            </button>
        </span>
    </li>
  )
}

export default ListItem
