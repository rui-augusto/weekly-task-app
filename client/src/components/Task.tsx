import React from 'react';
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd, } from 'react-icons/md'
import { TaskTd, TaskTable, FullContentTaskArea } from "./Task.styles";

interface Props{
  id: number;
  task: string;
  description: string;
  state: number;
}

export const Task = (props: Props) => {
  console.log(props);
  return(
    <FullContentTaskArea>
      <TaskTable style = {{border: "1px solid black"}}>
        <tbody>
          <tr>
            <TaskTd>{ props.task }</TaskTd>
            <TaskTd>{ props.description }</TaskTd>
            <TaskTd><MdOutlinePlaylistAddCheck/></TaskTd>
            <TaskTd><MdOutlinePlaylistAdd /> </TaskTd>{/*</td>// adicionar (ou alterar?) comentário*/}
          </tr>
        </tbody>
      </TaskTable>
    </FullContentTaskArea>
  );
}


// A IDEIA EH FAZER CADA PROPS SER UM ITEM DE UMA LISTA NÃO ORDENADA, REPRESENTANDO UMA TAREFA DIFERENTE
// CADA TASK TERÁ UMA ÍCONES PARA VER MAIS INFORMAÇÕES ( QUE DEVERÃO SER MOSTRADAS EM CIMA DA PALAVRA OU ABRINDO UMA JANELA), ALTERAR, APAGAR