import "../Form/form.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";


export const Form = (props) => {
  const [inputAdd, setInputAdd] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setInputAdd(value);
  };

  const clearInputAdd = () => {
    props.addTask(inputAdd);
    setInputAdd("");
  };

  return (
    <div className="wrp">
  
    <div className="form-container">
      <input
        placeholder="+ Add a task, press Enter to save"
        value={inputAdd}
        onChange={inputHandler}
        type="text"
      />
      <button disabled={!inputAdd} onClick={clearInputAdd}>
        Add
      </button>
    </div>
    </div>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired
};
