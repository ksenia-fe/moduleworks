import styled from "./ToDoList.module.css";

const ToDoList = ({ items }) => {
  return (
    <ol className={styled.todoList}>
      {items.map((todo) => (
        <li key={todo.id} id={todo.id} className={styled.todoItem}>
          {todo.title}
        </li>
      ))}
    </ol>
  );
};

export default ToDoList;
