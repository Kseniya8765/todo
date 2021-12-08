
import { Title } from "../Title/Title";
import { Form } from "../Filter/Form/Form";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import {TodoAppContext} from '../App/context';

export const Filter = ({
  addTask
}) => {
  const context = useContext(TodoAppContext);
  const {btnHandler,inputHandler} = context;

  return (
    <div>
      <Title />
      <div className="wrp">
      <Form addTask={addTask} />
      </div>

    </div>
  );
};

Filter.propTypes = {
  addTask: PropTypes.func.isRequired,
  displayedList: PropTypes.string.isRequired
};
