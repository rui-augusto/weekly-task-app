import React, { useEffect, useState } from 'react';

import { Task } from "../components/Task";
import { FullContentArea } from "./index.styles";
import { getAllTasks } from "../api/index";

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
      {
        listOfTasks.map((item, key) => (
            <Task id = {item.id} task = {item.task} description = {item.description} state = {item.state} key = {key}/>
        ))
      }
    </FullContentArea>
  );
}