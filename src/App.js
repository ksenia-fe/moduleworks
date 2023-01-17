import React, { useEffect, useState } from "react";

import ToDoListWrapper from "./components/ToDos/ToDoListWrapper/ToDoListWrapper";
import TodoInput from "./components/ToDos/ToDoInput/ToDoInput";

import styled from "./App.module.css";

const App = () => {
  const [todoList, setTodoList] = useState(null);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let isApiSubscribed = true;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        if (isApiSubscribed) {
          setTodoList(data.filter((item, index) => index <= 9));
        }
      });
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const addTodoHandler = (enteredText, clearFunc) => {
    setTodoList((prevList) => {
      const updatedList = [...prevList];
      updatedList.push({ title: enteredText, id: Math.random().toString() });
      return updatedList;
    });
    clearFunc("");
  };

  return (
    <div>
      <section className={styled.todoForm}>
        <TodoInput onAddTodo={addTodoHandler} setTyping={setTyping} />
      </section>
      <ToDoListWrapper todoList={todoList} />
      <p className={styled.todoTyping}>
        {typing && todoList && `Typing: ${typing}`}
      </p>
    </div>
  );
};

export default App;
