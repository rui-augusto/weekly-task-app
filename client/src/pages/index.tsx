import React, { useEffect, useState } from 'react';

import { Task } from "../components/Task";
import { Header } from "../components/Header";
import { NewTaskArea } from "../components/NewTaskArea";
import { getAllTasks } from "../api/index";
import { FullContentArea, TaskContentArea} from "./index.styles";

export const Index = () => {

  const [listOfTasks, setListOfTasks] = useState<Array<any>>([]);

  useEffect(() => {
    loadingTasks();
    console.log("connected");
  }, []);


  const loadingTasks =  async () => {
    setListOfTasks(await getAllTasks());
  }

  return (
    <FullContentArea>
      <Header />
      <TaskContentArea>
        { listOfTasks.map((item, key) => (
          <Task id = {item.id} task = {item.task} description = {item.description} state = {item.state} key = {key}/>
          ))
        }
        <NewTaskArea />
      </TaskContentArea>
    </FullContentArea>
  );
}