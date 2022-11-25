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

export const completeTask = async (id: string, state: number) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:3000/task/update/:id',
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
      url: 'http://localhost:3000/task/create',
      data: { task, description }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const removeTask = async (id: number) => {
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