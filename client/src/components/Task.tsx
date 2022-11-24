import style from 'styled-components';

// importing react-icons
//import { IoIosAdd, IoIosDoneAll } from "react-icons/io";
import { MdOutlinePlaylistAddCheck, MdOutlinePlaylistAdd,
//         MdOutlineBookmarkAdd, MdOutlineBookmarkAdded,
} from 'react-icons/md'

interface Props{
  task: string;
  description: string;
}

export const Task = (props: Props) => {
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
    </div>
  );
}


// A IDEIA EH FAZER CADA PROPS SER UM ITEM DE UMA LISTA NÃO ORDENADA, REPRESENTANDO UMA TAREFA DIFERENTE
// CADA TASK TERÁ UMA ÍCONES PARA VER MAIS INFORMAÇÕES ( QUE DEVERÃO SER MOSTRADAS EM CIMA DA PALAVRA OU ABRINDO UMA JANELA), ALTERAR, APAGAR