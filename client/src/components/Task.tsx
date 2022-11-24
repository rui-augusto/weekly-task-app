import { useEffect, useState } from 'react';
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd, } from 'react-icons/md'
import { getAllTasks } from "../api/index";
import { TaskTd, TaskTable, FullContentTaskArea } from "./Task.styles";

interface Props{
  task: string;
  description: string;
}

export const Task = (props: Props) => {

  const [listOfTasks, setListOfTasks] = useState<Object>({});

  useEffect(() => {
    setListOfTasks(getAllTasks());
  }, []);
  console.log(props.task + " / " + props.description);
  return(
    <FullContentTaskArea>
      <TaskTable style = {{border: "1px solid black"}}>
        <tr>
          <TaskTd>{ props.task }</TaskTd>
          <TaskTd>{ props.description }</TaskTd>
          <TaskTd><MdOutlinePlaylistAddCheck /></TaskTd>
          <TaskTd><MdOutlinePlaylistAdd /> </TaskTd>{/*</td>// adicionar (ou alterar?) comentário*/}
        </tr>
      </TaskTable>
    </FullContentTaskArea>
  );
}


// A IDEIA EH FAZER CADA PROPS SER UM ITEM DE UMA LISTA NÃO ORDENADA, REPRESENTANDO UMA TAREFA DIFERENTE
// CADA TASK TERÁ UMA ÍCONES PARA VER MAIS INFORMAÇÕES ( QUE DEVERÃO SER MOSTRADAS EM CIMA DA PALAVRA OU ABRINDO UMA JANELA), ALTERAR, APAGAR