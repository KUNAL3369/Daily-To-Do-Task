import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className={styles.list}>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet. Add something!</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => onDelete(index)}
            onEdit={(newTask) => onEdit(index, newTask)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
