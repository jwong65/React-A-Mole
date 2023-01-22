import './App.css';
import { useState } from 'react';

function App() {
  // Usestate with the default score being 0
  let [score, setScore] = useState(0)
  return (
  <>
  {/* This is the state for score. */}
    {score}
  </>
  );
}

export default App;
