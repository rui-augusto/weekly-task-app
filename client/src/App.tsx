import React from 'react';
import { Task } from "./components/Task";

interface Task{

}

function App() {
  const tasks = [
    {task: "ler livro", description: "o hobbit"},
    {task: "comer frutas", description: "banana, maçã e goiaba"},
    {task: "mandar mensagem leandro", description: "feedback homenagens + presente julia (Tia laine)"},
  ];
  return (
    <div >
      {
        tasks.map((item, key) => (
            <Task task = {item.task} description = {item.description} key = {key}/>
        ))
      }
    </div>
  );
}

export default App;

// use lazy() and suspense() for loading different routes
// https://www.youtube.com/watch?v=-4fyyyQjsz8
// export default 