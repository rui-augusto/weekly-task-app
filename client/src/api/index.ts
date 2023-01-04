import axios from 'axios';

// defining functions to get database info

export const getAllTasks = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/tasks/all'
    });
    return res.data;
  } catch(err) {
    console.log(err);
  }
}

export const completeTask = async (id: number, state: number) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:3000/tasks/update/:id',
      params: { id },
      data: { state }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTask = async (task: string, description: string) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/tasks/create',
      data: { task, description }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const removeTask = async (id: number) => {
  try {
    await axios({
      method: 'DELETE',
      url: 'http://localhost:3000/task/remove/' + id,
      // params: { id }
    });
    return true;
  } catch (err) {
    console.log(err);
    return false
  }
};