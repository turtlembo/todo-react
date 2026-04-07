import React, { useState } from 'react'
import ListItem from './ListItem'

const List = ({tasks, onImportantApp,onDoneApp, onDeleteApp}) => {

    const styles = {
        color: 'black',
        fontWeight: 'normal'
    }
    const map = tasks.map((item) =>(
        <ListItem 
        key={item.id}
        item={item}
        // initialData={initialData}
        // onImportantItem = {importantkHandler}
        onDoneList={(id)=>onDoneApp(id)}
        onDeleteList = {(id)=>onDeleteApp(id)}
        onImportantList = {(id)=>onImportantApp(id)}


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
