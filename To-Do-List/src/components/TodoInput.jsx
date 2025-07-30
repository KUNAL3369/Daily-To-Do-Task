import { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
