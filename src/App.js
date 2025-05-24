import React, { useState } from 'react';
import Home from './pages/Home';
import LogWorkout from './pages/LogWorkout';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (workout) => {
    setWorkouts(prev => [...prev, workout]);
  };

  return (
    <div>
      <Home />
      <LogWorkout onAddWorkout={handleAddWorkout} />
      {workouts.map((w, i) => (
        <div key={i}>
          <h4>{w.exercise}</h4>
          <p>Duration: {w.duration} minutes</p>
        </div>
      ))}
    </div>
  );
}

export default App;
