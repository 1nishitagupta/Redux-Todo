import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteTodo, deleteAllTodo } from "./actions";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

const ToDo = () => {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  console.log(input);
  return (
    <div id="wrapper">
      <h1>
        <i className="fa-regular fa-calendar-check"></i> Todo List
      </h1>
      <div className="container">
        <div className="box">
          <div className="inputs">
            <input
              type="text"
              autoFocus
              id="task"
              placeholder="Write Your ToDo Task Here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="addTask-btn" onClick={() => dispatch(addToDo(input), setInput(""))}>
              Add Task
            </button>
            
          </div>
          
          <h2>Tasks:</h2>
          
          <ul className="todo-list">
            {list.map((val) => {
              return (
                <li key={val}>
                  <span>{val.data}</span>
                  <span>
                    <i onClick={()=> dispatch(deleteTodo(val.id))} ><RemoveCircleRoundedIcon /></i>
                  </span>
                </li>
              );
            })}
          </ul>
          <button onClick={()=>dispatch(deleteAllTodo())}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
