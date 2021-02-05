import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from './components/AddTask';
import { useState } from "react";

function App() {
  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment ',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 6th at 3:30pm',
        reminder:false
    }
]);
//Add Task

  const addTask= (task)=>{
    setTasks([...tasks,{...task,id:tasks.length+1}]);
  } 
//Delete Task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
  }

//Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task
    ))
  } 
  return (
    <header className="col-12 col-md-6 mt-5 mx-auto p-2 container">
      <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {tasks.length>0 ? 
      <Tasks tasks = {tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}/>:<div className="d-flex justify-content-center py-3"><h1>No Task to Show</h1></div>}
    </header>
  );
}

export default App;
