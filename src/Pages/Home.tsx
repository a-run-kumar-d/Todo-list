import "../styles/home.css"
import "../styles/common.css"
import Task from "../components/Task"
import { useTaskData } from "../Data/taskDataContext";
import { useState } from "react";

export default function Home() {
    const [sortValue, setSortValue] = useState("all")
    const {getTasks, createTask ,deleteMultipleTasks} = useTaskData();
    const tasks = getTasks(sortValue);
    function handleText(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
          createTask(e.currentTarget.value);
          e.currentTarget.value = "";
        }
      }
    function handleSort(value: string) {
        setSortValue(value);
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
                        console.log(task)
                        return(
                        <Task {...task} />

                        )
                    })
                    }
                </div>
                <div className="taskNav">
                    <div className="statusUpdater">{tasks.length} items lefts</div>
                    <div className="sortSection">
                        <button className={`sortButton ${sortValue==='all' ?'activeState' : ''}`} id="allButton" onClick={()=>{handleSort("all")}}>All</button>
                        <button className={`sortButton ${sortValue==='active' ?'activeState' : ''}`} id="activeButton" onClick={()=>{handleSort("active")}}>Active</button>
                        <button className={`sortButton ${sortValue==='completed' ?'activeState' : ''}`} id="completedButton" onClick={()=>{handleSort("completed")}}>Completed</button>
                    </div>
                    <button className="sortButton" id="clearButton" onClick={() => {
                        const ids = tasks.filter(task => task.status === false).map(task => task.id);
                        deleteMultipleTasks(ids);
                    }}>Clear Completed</button>
                </div>    
            </div>
        </div>
          
        </>
    )
}
