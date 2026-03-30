import React, { useState } from 'react'
import ListItem from './ListItem'

const List = ({getTasks}) => {

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

           getTasks(tasks)
       }

       const deleteItemHandler = (id)=>{
            const ind = tasks.findIndex( item =>{
               return item.id == id
           })

           let newTasks = [...tasks];
           newTasks.splice(ind,1);
           setTasks(newTasks);
       }
    const map = tasks.map((item) =>(

        <ListItem 
        key={item.id}
        item={item}
        initialData={initialData}
        onImportantItem = {importantkHandler}
        onDoneItem ={doneHandler}
        onDeleteItem ={deleteItemHandler}
        // onDeleteItem ={{id} => deleteItemHandler()} второй вариант
        />
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
