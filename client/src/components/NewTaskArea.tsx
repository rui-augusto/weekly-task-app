import React from 'react';
import { useForm } from 'react-hook-form';
import { addTask } from "../api/index";

export const NewTaskArea = () => {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  
  const createNewTask = async (data: any) => {
    try {
      await addTask(data.task, data.description);
      console.log(`task ${data.task} created`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
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
  );
}