import React from 'react'

const List = () => {
    const styles = {
        color: 'black',
        fontWeight: 'normal'
    }
    return (
        <ul className="list-group todo-list">
            <li className="list-group-item">
                <span className="todo-list-item">
                    <span className="todo-list-item-label" style={styles}>To do app</span>
                    <button type="button" className="btn btn-outline-success btn-sm float-end">
                        ❕
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm float-end">
                        🗑
                    </button>
                </span>
            </li>
        </ul>
  )
}

export default List
