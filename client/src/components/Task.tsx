import React from 'react';
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd, } from 'react-icons/md'
import { FullContentTaskArea, TaskDescription, TaskIcons, TaskList, TaskName } from "./Task.styles";
import { completeTask, removeTask } from "../api/index";

interface Props{
  id: number;
  task: string;
  description: string;
  state: number;
}

export const Task = (props: Props) => {
  console.log(props);

  // implementando funcoes [marcar como feita, excluir]
  const markAsDone = async () => {

  }

  const deleteTask = async (id: number) => {
    try {
      await removeTask(id);
      console.log(`task ${id} removed`);
    } catch (err){
      console.log(err);
    }
  }

  return(
    <FullContentTaskArea>
        <TaskList>
          <TaskName>{ props.task }</TaskName>
          <TaskDescription>{ props.description }</TaskDescription>
          <TaskIcons><MdOutlinePlaylistAddCheck style = {{fontSize: "20px"}}/></TaskIcons>
          <TaskIcons><MdOutlinePlaylistAdd onClick = {() => { deleteTask(props.id) }} style = {{fontSize: "20px"}}/></TaskIcons> 
        </TaskList>
    </FullContentTaskArea>
  );
}


// A IDEIA EH FAZER CADA PROPS SER UM ITEM DE UMA LISTA NÃO ORDENADA, REPRESENTANDO UMA TAREFA DIFERENTE
// CADA TASK TERÁ UMA ÍCONES PARA VER MAIS INFORMAÇÕES ( QUE DEVERÃO SER MOSTRADAS EM CIMA DA PALAVRA OU ABRINDO UMA JANELA), ALTERAR, APAGAR