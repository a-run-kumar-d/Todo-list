import { ReactNode, createContext, useContext, useState } from "react";

type TaskDataProvidertype = {
    children: ReactNode;
}
type taskType = {
    id: number
    task: string
    status: boolean
}
type TaskData = {
    getTasks: (value: string) => taskType[];
    createTask: (task: string) => void;
    deleteTask: (id: number) => void;
    readStatus: (id: number) => boolean|undefined ;
    updateStatus: (id: number) => void;
    deleteMultipleTasks: (ids : number[]) => void;
}
const taskDataContext = createContext({} as TaskData);

export function useTaskData(){
    return useContext(taskDataContext);
}

export function TaskDataProvider({children}: TaskDataProvidertype){
    const [tasks, setTasks] = useState<taskType[]>([]);
    function getTasks(value: string){
        if(value === "active"){
            return tasks.filter(task => task.status === true);
        }
        else if(value === "completed"){
            return tasks.filter(task => task.status === false);
        }
        else{
            return tasks;
        }
    }
    function createTask(task: string){
        const newTask = {
            id: Math.random(),
            task: task,
            status: true
        }
        setTasks([...tasks, newTask]);
    }
    function deleteTask(id: number){
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
    function readStatus(id: number){
        const task = tasks.find(task => task.id === id);
        return task?.status;
    }
    function updateStatus(id: number){
        tasks.map(task => {
            if(task.id === id){
                task.status = !task.status;
            }
        })
    }
    function deleteMultipleTasks(ids: number[]){
        const newTasks = tasks.filter(task => !ids.includes(task.id));
        setTasks([...newTasks]);
    }
    return(
        <taskDataContext.Provider value={{getTasks, createTask , deleteTask, readStatus, updateStatus ,deleteMultipleTasks}}>
            {children}
        </taskDataContext.Provider>   
    )


}