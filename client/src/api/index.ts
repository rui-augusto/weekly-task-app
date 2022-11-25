import axios from 'axios';

export const getAllTasks = async () => {
  axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/task'
    });
    return res.data;
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