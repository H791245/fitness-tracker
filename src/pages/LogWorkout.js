import React, { useState } from 'react';

function LogWorkout({ onAddWorkout }) {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ exercise, duration });
    setExercise('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise"
        required
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (min)"
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default LogWorkout;
