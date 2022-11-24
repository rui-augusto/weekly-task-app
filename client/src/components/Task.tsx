import { useEffect, useState } from 'react';
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd, } from 'react-icons/md'
import { getAllTasks } from "../api/index";

interface Props{
  task: string;
  description: string;
}

export const Task = (props: Props) => {

  const [listOfTasks, setListOfTasks] = useState<Object>({});

  useEffect(() => {
    setListOfTasks(getAllTasks());
  }, []);

  const showMessage = () => {
    console.log(listOfTasks);
  }

  console.log(props.task + " / " + props.description);
  return(
    <div>
      <table style = {{border: "1px solid black"}}>
        <tr>
          <td>{props.task}</td>
          <td style = {{fontSize: "20px"}}>{props.description}</td>
          <td style = {{fontSize: "20px"}}><MdOutlinePlaylistAddCheck /></td>
          <td style = {{fontSize: "19px"}}><MdOutlinePlaylistAdd /> </td>{/*</td>// adicionar (ou alterar?) comentário*/}        </tr>
      </table>

      <button onClick = {showMessage}>SHOW MESSAGE</button>
    </div>
  );
}


// A IDEIA EH FAZER CADA PROPS SER UM ITEM DE UMA LISTA NÃO ORDENADA, REPRESENTANDO UMA TAREFA DIFERENTE
// CADA TASK TERÁ UMA ÍCONES PARA VER MAIS INFORMAÇÕES ( QUE DEVERÃO SER MOSTRADAS EM CIMA DA PALAVRA OU ABRINDO UMA JANELA), ALTERAR, APAGAR