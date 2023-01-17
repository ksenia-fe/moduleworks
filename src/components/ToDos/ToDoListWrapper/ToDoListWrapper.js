import ToDoList from "../ToDoList/ToDoList";

import styled from "./ToDoListWrapper.module.css";

const ToDoListWrapper = ({ todoList }) => {
  if (!todoList) {
    return <p className={styled.text}>Loading...</p>;
  }

  let content = <p className={styled.text}>No todos found.</p>;
  if (todoList.length > 0) {
    content = <ToDoList items={todoList} />;
  }

  return (
    <section className={styled.todos}>
      {content}
      {content}
    </section>
  );
};

export default ToDoListWrapper;
