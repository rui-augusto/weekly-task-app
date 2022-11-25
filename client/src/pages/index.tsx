import React, { useEffect, useState } from 'react';

import { Task } from "../components/Task";
import { FullContentArea } from "./index.styles";
import { getAllTasks } from "../api/index";

export const Index = () => {

  const tasks = [
    {task: "ler livro", description: "o hobbit"},
    {task: "comer frutas", description: "banana, maçã e goiaba"},
    {task: "mandar mensagem leandro", description: "feedback homenagens + presente julia (Tia laine)"},
  ];

  const [listOfTasks, setListOfTasks] = useState<Array<any>>([]);

  useEffect(() => {
    loadingTasks();
    console.log("connected");
  }, []);

  const loadingTasks =  async () => {
    setListOfTasks(await getAllTasks());
    console.log(listOfTasks);
  }


  return (
    <FullContentArea>
      {
        listOfTasks.map((item, key) => (
            <Task task = {item.task} description = {item.description} key = {key}/>
        ))
      }
    </FullContentArea>
  );
}