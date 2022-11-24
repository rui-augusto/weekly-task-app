import { Task } from "../components/Task";
import { FullContentArea } from "./index.styles";

export const Index = () => {

  const tasks = [
    {task: "ler livro", description: "o hobbit"},
    {task: "comer frutas", description: "banana, maçã e goiaba"},
    {task: "mandar mensagem leandro", description: "feedback homenagens + presente julia (Tia laine)"},
  ];

  return (
    <FullContentArea>
      {
        tasks.map((item, key) => (
            <Task task = {item.task} description = {item.description} key = {key}/>
        ))
      }
    </FullContentArea>
  );
}