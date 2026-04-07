import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Search from './Search';
import List from './List';
import AddItem from './AddItem';
import Filter from './Filter';



const App =()=>{
    const initialData = [
        {id:1, title: 'To drink coffee', done: true, important: true},
        {id:2, title: 'To wash car', done: false, important: false},
        {id:3, title: 'To do app', done: true, important: false},
    ]

    const [tasks, setTasks] = useState(initialData)
    const [filter, setFilter] = useState(0)
    const [value, setValue] = useState('')

    // const getTasksHandler = (tasks)=>{
    // }
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
    
    const deleteItemHandler = (id)=>{
            const ind = tasks.findIndex( item =>{
               return item.id == id
           })

           let newTasks = [...tasks];
           newTasks.splice(ind,1);
           setTasks(newTasks);
       }

    const done = tasks.reduce((count, item)=>{
            if(item.done){
                return count+1
            }else{
                return count
            }
            // console.clear()
        },0)

    const todo = tasks.reduce((count, item)=>{
            if(!item.done){
                return count+1
            }else{
                return count
            }
            // console.clear()
        },0)

    const addItemHandler = (title)=>{
        const id = tasks[tasks.length-1].id+1
        const newTask = {id:id, title: title, done: false, important: false};
        let newData = [...tasks];
        newData.push(newTask);
        setTasks(newData);
        
    }

    const filterHandler = (type=0, value= '')=>{
        
        let filterTasks
        switch (type) {
            case 0:
                filterTasks = tasks.filter((el)=>{
                    return el && el.title.toLowerCase().includes(value.toLowerCase())
                })
                
                return filterTasks;
            case 1:
                filterTasks = tasks.filter((el)=>{
                    return el.done == false && el.title.toLowerCase().includes(value.toLowerCase())
                })
                
                return filterTasks;
            case 2:
                filterTasks = tasks.filter((el)=>{
                    return el.done ==true && el.title.toLowerCase().includes(value.toLowerCase())
                })
                return filterTasks;
            default:

                break;
        }
        
    }


    let filteredTasks = filterHandler(filter,value)

    

    // const searchHandler = (value)=>{
    //     console.log(value);
        
    // }
    return (
        <div className='todo-app'>
            <Header todo={todo} done={done}/>
            <div className="top-panel d-flex">
                <Search onSearch = {(value)=>setValue(value)}/>
                <Filter onFilter={(type)=>setFilter(type)}/>
            </div>
            {/* <Search onFilter={(type)=> filterHandler(type)}/> */}
            <List 
            // getTasks={(tasks)=>getTasksHandler(tasks)}
            tasks={filteredTasks}
            onImportantApp = {(id)=>importantkHandler(id)}
            onDoneApp = {(id)=> doneHandler(id)}
            onDeleteApp = {(id)=>deleteItemHandler(id)}
            />
            <AddItem onAdd={(title)=>addItemHandler(title)}/>
        </div>

    ) 
}

export default App;