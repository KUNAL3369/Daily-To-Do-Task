import { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    if (editedTask.trim()) {
      onEdit(editedTask);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.item}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.saveBtn}>💾</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <div>
            <button onClick={() => setIsEditing(true)} className={styles.editBtn}>✏️</button>
            <button onClick={onDelete}>❌</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
