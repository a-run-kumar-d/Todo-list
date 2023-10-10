import "../styles/task.css";
import TickIcon from "../assets/Tick-Icon.png"
import CrossIcon from "../assets/Cross-Icon.png"
import { useTaskData } from "../Data/taskDataContext";
import { useState } from "react";
type taskProps = {
  id: number
  task: string
  status: boolean
};
export default function task({id, status, task }: taskProps) {
  
  const {deleteTask, updateStatus} = useTaskData();
  const [currentStatus, setCurrentStatus] = useState<boolean>(status);
  return (
    <>
      <div className="taskBar">
        {currentStatus === true ? (
          <button className="statusButton" id="ActivedButton" onClick={()=>{
            updateStatus(id)
            setCurrentStatus(!currentStatus)
          }}></button>
        ) : (
          <button className="statusButton" id="CompletedButton" onClick={()=>{
            updateStatus(id)
            setCurrentStatus(!currentStatus)
          }}><img src={TickIcon} id="tick-icon" ></img></button>
        )}

        <div className="taskDetail">{task}</div>
        <button className="deleteButton" onClick={()=>{deleteTask(id)}}><img src={CrossIcon} id="cross-icon"></img></button>
      </div>
    </>
  );
}
