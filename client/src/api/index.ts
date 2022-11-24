import axios from 'axios';

export const getAllTasks = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/task'
    });
    return res;
  } catch(err) {
    console.log(err);
  }
}

export const completeTask = async (id: string, task: string, description: string) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/task/update/:id',
      params: { id },
      data: { task, description }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addTask = async (content: any) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/task/create',
      data: { content }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const removeTask = async (id: string) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: '/task/remove/:id',
      params: { id }
    });
  } catch (err) {
    console.log(err);
  }
};