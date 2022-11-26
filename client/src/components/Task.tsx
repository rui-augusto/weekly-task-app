import React, { useState } from 'react';
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd, } from 'react-icons/md'
import { FullContentTaskArea, TaskDescription, TaskHr, TaskIcons, TaskList, TaskName } from "./Task.styles";
import { completeTask, removeTask } from "../api/index";

interface Props{
  id: number;
  task: string;
  description: string;
  state: number;
}

export const Task = (props: Props) => {
  
  // CONTROLS THE VISIBILITY OF THE TASK
  const [showTask, setShowTask] = useState<boolean>(true);

  // CALLS AN API FUNCTION THAT CHANGES TASK STATE VALUE TO 1 (done)
  const markAsDone = async () => {
    const res = await completeTask(props.id, 1);
    if (!res) {
      console.log("error: try again");
    } else {
      console.log("task state altered to 'done'");
    }
  }

  // CALLS AN API FUNCTION THAT REMOVES THE TASK DATA
  const deleteTask = async () => {
    const res = await removeTask(props.id);
    if (!res){
      console.log("error: try again");
    } else {
      setShowTask(false);
      console.log(`task ${props.id} deleted`);
    }
  }

  return(
  <div>
    { showTask &&
    <FullContentTaskArea>
        <TaskList>
          <TaskName>{ props.task }</TaskName>
          <TaskDescription>{ props.description }</TaskDescription>
          <TaskIcons><MdOutlinePlaylistAddCheck onClick = {markAsDone} style = {{fontSize: "20px"}}/></TaskIcons>
          <TaskIcons><MdOutlinePlaylistAdd onClick = {deleteTask} style = {{fontSize: "20px"}}/></TaskIcons>
        </TaskList>
        <TaskHr />
        </FullContentTaskArea>
    }
  </div>
  );
}
