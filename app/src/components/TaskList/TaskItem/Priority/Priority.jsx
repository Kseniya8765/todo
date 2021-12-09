import "../Priority/priority.scss";
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import {TodoAppContext} from '../../../App/context';
import copy from "./img/copy.png";

export const Priority = ({ id }) => {
  const context = useContext(TodoAppContext);
  const {importantTask} = context;

  return (
      <img src={copy} className="important" onClick={() => importantTask(id)} alt="img" />
    
  );
};

Priority.propTypes={
  id: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired
}