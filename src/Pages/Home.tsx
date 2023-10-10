import "../styles/home.css"

import Task from "../components/Task"
import { useTaskData } from "../Data/taskDataContext";
import { useState } from "react";
import task from "../components/Task";

export default function Home() {
    const [sortValue, setSortValue] = useState("all")
    const {getTasks, createTask ,deleteTask} = useTaskData();
    const tasks = getTasks(sortValue);
    function handleText(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
          createTask(e.currentTarget.value);
          e.currentTarget.value = "";
        }
      }
    return (
        <>
        <div className="bgContainer"></div>
        <div className="homeContainer">
            <div className="heading1">TODO</div>
            <input type="text" className="inputBox" placeholder="Add a new task" onKeyDown={handleText} />
            <div className="taskContainer">
                <div className="taskList">
                    {tasks.map((task)=>{
                        return(
                        <Task {...task} />

                        )
                    })
                    }
                </div>
                <div className="taskNav">
                    <div className="statusUpdater">{tasks.length} items lefts</div>
                    <div className="sortSection">
                        <button className="sortButton" id="allButton" onClick={()=>{setSortValue("all")}}>All</button>
                        <button className="sortButton" id="activeButton" onClick={()=>{setSortValue("active")}}>Active</button>
                        <button className="sortButton" id="completedButton" onClick={()=>{setSortValue("completed")}}>Completed</button>
                    </div>
                    <button className="sortButton" id="clearButton" onClick={() => {
                        tasks.map(task => {
                            if(task.status === false){
                                deleteTask(task.id);
                            }
                        });
                    }}>Clear Completed</button>
                </div>    
            </div>
            <div className="subText">Drag and drop to reorder the list</div>   
        </div>
          
        </>
    )
}
