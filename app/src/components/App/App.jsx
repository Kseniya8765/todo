import "../App/reset.scss";
import { TaskList } from "../TaskList/TaskList";
import { Loader } from "../Loader/Loader";
import React, { useState, useEffect } from "react";
import { TodoAppContext } from "../App/context";
import { ErrorBoundary } from "../error/ErrorBoundary";

const getTodo = () => [
  {
    taskName: "Add Icon to Dashboard",
    id: "1",
    important: false,
    active: true
  },
  {
    taskName: "Create To-Do List",
    id: "2",
    important: false,
    active: false
  },
  {
    taskName: "Add Icon to Das",
    id: "3",
    important: true,
    active: true
  }
];
const filter = (inputFilterValue, todo) => {
  if (inputFilterValue === "") return todo;
  return todo.filter((item) =>
    item.taskName.toLowerCase().includes(inputFilterValue.toLowerCase())
  );
};

const btnsFilter = (todo, displayedList) => {
  if (displayedList === "") return todo;
  if (displayedList === "all") return todo;
  if (displayedList === "active") return todo.filter((item) => item.active);
  if (displayedList === "complited") return todo.filter((item) => !item.active);
};

export const App = () => {
  const [todo, setTodo] = useState(null);
  const [inputFilterValue, setInputFilterValue] = useState("");
  const [displayedList, setDisplayedList] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const todo = getTodo();
      setTodo(todo);
      setIsLoaded(true);
    }, 3000);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  const filteredList = filter(inputFilterValue, todo);
  const filteredBtns = btnsFilter(filteredList, displayedList);

  const addTask = (inputAdd) => {
    const newTodo = todo.slice();

    newTodo.unshift({
      taskName: inputAdd,
      id: `${todo.length} + 1`,
      important: false,
      active: true
    });

    setTodo(newTodo);
  };

  const inactiveTask = (inputId) => {
    const newTodo = todo.map((item) => {
      const { id, active } = item;

      return {
        ...item,
        active: inputId === id ? !active : active
      };
    });

    setTodo(newTodo);
  };

  
  const deleteTask = (inputId) => {
    const newTodo = todo.filter((item) => {
      const { id } = item;

      return id !== inputId;
    });

    setTodo(newTodo);
  };

  const btnHandler = (displayedList) => {
    setDisplayedList(displayedList);
  };

  const inputHandler = (e) => {
    const { value } = e.target;
    setInputFilterValue(value);
  };

  const propsDrill = {
    deleteTask: deleteTask,
    inactiveTask: inactiveTask,
    btnHandler: btnHandler,
    inputHandler: inputHandler
  };

  return (
    <TodoAppContext.Provider value={propsDrill}>
      <div>
        <ErrorBoundary>
          <TaskList
            addTask={addTask}
            todo={filteredBtns}
            displayedList={displayedList}
            inputFilterValue={inputFilterValue}
          />
        </ErrorBoundary>
      </div>
    </TodoAppContext.Provider>
  );
};
