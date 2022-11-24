import React from 'react';
import "./index.css";
import { Index } from "./pages/index";


function App() {
  return (
    <div className = "App">
        <Index />
    </div>
  );
}

export default App;

// use lazy() and suspense() for loading different routes
// https://www.youtube.com/watch?v=-4fyyyQjsz8
// export default 