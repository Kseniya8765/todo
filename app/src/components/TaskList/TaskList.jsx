import { TaskItem } from "../TaskList/TaskItem/TaskItem";
import { Filter } from "../Filter/Filter";
import "./list.scss";
import React from "react";
import PropTypes from "prop-types";

import menu from "../Filter/Form/img/Tasks.png";

export function TaskList({ todo, inputFilterValue, addTask, displayedList }) {
  return (
    <div>
      <Filter
        inputFilterValue={inputFilterValue}
        addTask={addTask}
        displayedList={displayedList}
      />
      <div className="flx">
       <div className="aside"><div className="menu-wrp"><img src={menu} alt="img" /></div></div>
       <div className="wrp-task">
      <p className="text2">
          Total: <span>7</span>
        </p>
        <h4 className="text">
          To do (<span>3</span>)
        </h4>
      <div>
        {todo.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      taskName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired,
  inputFilterValue: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  displayedList: PropTypes.string.isRequired
};
