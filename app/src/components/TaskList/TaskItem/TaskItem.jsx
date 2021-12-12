import "../TaskItem/item.scss";
import { Delete } from "../TaskItem/Delete/Delete";
import { Copy} from "../TaskItem/Priority/Copy";
import { Edit } from "../TaskItem/Edit/Edit";
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import {TodoAppContext} from '../../App/context';

export const TaskItem = ({
  taskName,
  id,
  important,
  active
}) => {
  const context = useContext(TodoAppContext);
  const {inactiveTask} = context;

  const style = {
    textDecoration: active === true ? "none" : "line-through",
    cursor: "pointer"
  };

  return (  
      <div className="box">
          <div className="box-inp">
            <input
              type="checkbox"
              className="custom-checkbox"
              id={id}
              name="happy"
              value="yes"
              onClick={() => inactiveTask(id)}
            ></input>
            <label style={style} for={id}>{taskName} </label>
          <div className="icons">
      <Edit id={id}/>
      <Copy id={id} />
      <Delete id={id} />
          </div>
          </div>
        </div>
    
  );
};

TaskItem.propTypes ={
  taskName: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
}
