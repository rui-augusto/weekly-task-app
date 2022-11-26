import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


import { Task } from "../components/Task";
import { FullContentArea, TaskContentArea} from "./index.styles";
import { getAllTasks, addTask } from "../api/index";
import { Header } from '../components/Header';

export const Index = () => {

  const [listOfTasks, setListOfTasks] = useState<Array<any>>([]);
  const [newTaskWindow, setNewTaskWindow] = useState<boolean>(false); // controlling new tasks inputs
  
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  useEffect(() => {
    loadingTasks();
    console.log("connected");
  }, []);


  const loadingTasks =  async () => {
    setListOfTasks(await getAllTasks());
  }

  const createNewTask = async (data: any) => {
    try {
      await addTask(data.task, data.description);
      console.log(`task ${data.task} created`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FullContentArea>
      <Header />
      <TaskContentArea>
        { listOfTasks.map((item, key) => (
          <Task id = {item.id} task = {item.task} description = {item.description} state = {item.state} key = {key}/>
          ))
        }
      </TaskContentArea>
      { newTaskWindow &&
        <div>
          <form onSubmit={handleSubmit(createNewTask)}>
            <input
              {...register("task", {
                  required: true,
                  maxLength: 20, 
              })}
            />
            <input
              {...register("description", {
                  required: false,
                  maxLength: 100, 
              })}
            />
            <input type="submit" />
          </form>
        </div>
      }
    </FullContentArea>
  );
}