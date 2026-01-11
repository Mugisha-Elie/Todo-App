import { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header'
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './index.css';

function App(){
  const [isSiderbarOpen, setIsSidebarOpen] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const fetchTasks = async () => {
      try{
        const response = await fetch('http://localhost:5000/todos');
        const jsonData = await response.json();
        setTasks(jsonData);
      }catch(err){
        console.error(err.message);
      }
    }

    fetchTasks();
  }, []);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSiderbarOpen)
  }

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete))
  }

  const toggleTask = (idToToggle) => {
    setTasks(tasks.map(task => {
      if(task.id === idToToggle){
        return{...task, isCompleted: !task.isCompleted};
      }
      return task;
    }));
  }

  const addTask = async (taskDetails) => {
    try{
      const body = {
        title: taskDetails.title,
        description: taskDetails.description,
        category: taskDetails.category
      }

      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });

      const newTodoFromDB = await response.json();

      setTasks([newTodoFromDB, ...tasks]);
    }catch(err){
      console.error(err.message);
    }
  }


  return (
    <div className='flex bg-gray-50 min-h-screen font-sans'>
      <Sidebar isOpen={isSiderbarOpen}/>

      <div className='flex-1 flex flex-col'>
        <Header toggleSlider={toggleSlider}/>

        <main className="p-6 max-w-4xl mx-auto w-full">

          <div className='mb-8'>

            <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
            <p className="mt-1 text-gray-500">Here is what's on your plate today.</p>
          </div>

          <TaskForm onAdd={addTask}/>

          <div className='mt-8'>
            <TaskList
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          </div>

        </main>
      </div>
    </div>
  )
}

export default App;