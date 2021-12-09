import "../Delete/delete.scss";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { TodoAppContext } from "../../../App/context";
import delet from "./img/delete.png";

export const Delete = ({ id }) => {
  const context = useContext(TodoAppContext);
  const { deleteTask } = context;
  return (
    <img src={delet} className="reset" onClick={() => deleteTask(id)} alt="img" />
  );
};

Delete.propTypes = {
  id: PropTypes.string.isRequired
};
