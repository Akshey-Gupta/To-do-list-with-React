import React, { useState } from 'react'

const ToDoList = () => {

    const[tasks,setTasks]=useState(["Wake Up","Take a shit","Get out of bed","eat the dog","walk the breakfast"]);
    const[newTask,setnewTask]=useState("");

    function handleTask(e){
      setnewTask(e.target.value);

    }

    function addTask(){
      if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setnewTask("");
      }else{
        alert("Field is Empty");
      }
    }
    function deletetask(index){
      setTasks(tasks.filter((_,i)=>i!=index))
    }

    function moveTaskUp(index){
      if(index>0){
        const updatedtasks=[...tasks];
        [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
        setTasks(updatedtasks);
      }else{
        alert("Already at Top");
      }
    }
    function moveTaskDown(index){
      if(index<tasks.length-1){
        const updatedtasks=[...tasks];
        [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
        setTasks(updatedtasks);
      }else{
        alert("Already at Bottom");
      }
    }

  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>
      <div>
        <input type="text" placeholder='Enter a task' value={newTask} onChange={handleTask}/>
        <button className='add-bttn' onClick={addTask}>Add</button>
      </div>
      <ol>{tasks.map((task,index)=><li key={index}><span className='text'>{task}</span><button className='dt-btn' onClick={()=>deletetask(index)}>&#10060;</button>
      <button className='up-btn' onClick={()=>moveTaskUp(index)}>&#9757;</button>
      <button className='down-btn' onClick={()=>moveTaskDown(index)}>&#128071;</button>
      </li>)}</ol>
    </div>
  )
}

export default ToDoList
