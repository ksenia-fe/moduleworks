import React, { useState } from "react";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "#b30303" : "#000")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? "#fa0606" : "#ccc")};
    background-color: ${({ invalid }) => (invalid ? "#faa7a7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
const ToDoInput = ({ onAddTodo, setTyping }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTyping(event.target.value);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddTodo(enteredValue, setEnteredValue);
    setTyping("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>ModuleWorks test task</label>
        <input
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler}
        />
      </FormControl>
    </form>
  );
};

export default ToDoInput;
