
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [list, setList] = useState([]);
  const addTask=(event)=>{
    event.preventDefault();
    let taskname=event.target.taskInput.value;
    let id=crypto.randomUUID();
    setList([...list,{name: taskname, id: id}]);
  }
  const deleteTask=(id)=>{
    setList(list.filter((e)=>{
      return e.id!=id;
    }))
    console.log(list);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="formDiv">
          <form className="form" onSubmit={addTask}>
            <input id="taskInput"></input>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="taskListDiv">
        {
          list.map((e)=>{
            return(
              <div  key={e.id}>
                <p className="INLINE">{e.name}</p>
                <button className="INLINE" onClick={()=>(deleteTask(e.id))}>Delete</button>
              </div>
              
            ) 
          })
        }
        </div>
    </div>
  )
}

export default App
