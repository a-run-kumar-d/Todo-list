import "../styles/task.css";
import TickIcon from "../assets/Tick-Icon.png"
import CrossIcon from "../assets/Cross-Icon.png"
import { useTaskData } from "../Data/taskDataContext";
type taskProps = {
  id: number
  task: string
  status: boolean
};
export default function task({id, status, task }: taskProps) {
  
  const {deleteTask, updateStatus} = useTaskData();
  return (
    <>
      <div className="taskBar">
        {status === true ? (
          <button className="statusButton" id="ActivedButton" onClick={()=>{
            updateStatus(id)
          }}></button>
        ) : (
          <button className="statusButton" id="CompletedButton" onClick={()=>{
            updateStatus(id)
          }}><img src={TickIcon} id="tick-icon" ></img></button>
        )}

        <div className={`taskDetail ${status=== false ?'completedState' : ''}`}>{task}</div>
        <button className="deleteButton" onClick={()=>{deleteTask(id)}}><img src={CrossIcon} id="cross-icon"></img></button>
      </div>
    </>
  );
}
