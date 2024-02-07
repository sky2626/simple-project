import React, {state, useState} from "react";

export default function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function hundleInputChange(event){
        setNewTask(event.target.value);
    };

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    };

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    function moveUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    };

    function moveDown(index){
        if (index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    };

    return(
        <div className="bg-slate-900 ">
            <h1 className="text-slate-600 text-center font-semibold text-lg p-6">To-Do-List</h1>
            <div className="flex md:flex-row gap-2 p-10 justify-center">
                <input 
                className="bg-slate-800 h-16 w-96 text-white rounded-lg"
                type="text" 
                placeholder="  Enter task please..."
                value={newTask}
                onChange={hundleInputChange} />
                <button 
                className="bg-green-600 text-white w-96 rounded-lg h-16 md:w-24"
                onClick={addTask}>
                     Add
                </button>
            </div>   
            
            <ol className="bg-slate-900 p-4">
                <h1
                className="text-center text-white text-lg font-extrabold">
                    My list
                </h1>
                {tasks.map((task, index) => 
                <li
                className="bg-slate-800 m-6 p-4 flex flex-col md:flex-row md:justify-between rounded-lg " 
                key={index}>
                    <span className="text-white text-center md:text-start mb-2 w-42">{task}</span>
                    <div
                    className="flex gap-4 flex-row justify-center">
                        <button 
                            className="bg-red-600 text-white h-16 w-20 rounded-lg"
                            onClick={() => deleteTask(index)}>
                                Delete
                        </button>
                        <button 
                            className="bg-blue-600 text-white h-16 w-20 rounded-lg"
                            onClick={() => moveUp(index)}>
                                Up
                        </button>
                        <button 
                            className="bg-blue-600 text-white h-16 w-20 rounded-lg"
                            onClick={() =>  moveDown(index)}>
                                Down
                        </button>
                    </div>
                </li>

                )}
            </ol>
        </div>
    );
}