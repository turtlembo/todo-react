import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {

    const initialData = [
        {id:1, title: 'To drink coffee', done: true, important: true},
        {id:2, title: 'To wash car', done: false, important: false},
        {id:3, title: 'To do app', done: true, important: false},
    ]

    let [tasks, setTasks] = useState(initialData)

    const styles = {
        color: 'black',
        fontWeight: 'normal'
    }

    const importantkHandler=(id)=>{
        const ind = tasks.findIndex( item =>{
            return item.id == id
        })
        let newTasks = [...tasks]
        newTasks[ind].important = !newTasks[ind].important
        setTasks(newTasks)
    }

    const doneHandler = (id)=>{
        const ind = tasks.findIndex( item =>{
            return item.id == id
        })
        let newTasks = [...tasks]
        newTasks[ind].done = !newTasks[ind].done
        setTasks(newTasks)
    }

    const map = tasks.map((item) =>(
         <li className="list-group-item">
        <span className={`todo-list-item  ${item.done ? 'done' : ''}  ${item.important ? 'important': '' }`}>
            <span onClick={()=>doneHandler(item.id)} className="todo-list-item-label">{item.title}</span>
            <button onClick={()=>importantkHandler(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
                        ❕
            </button>
            <button  type="button" className="btn btn-outline-danger btn-sm float-end">
                        🗑
            </button>
        </span>
    </li>
        // <ListItem key={item.id} item={item}/>
    ))

    return (
        <ul className="list-group todo-list">
            {/* {
                tasks.map((item)=>(
                    <li>{item.title}</li>
                ))
            } */}
            {map}
        </ul>
  )
}

export default List
