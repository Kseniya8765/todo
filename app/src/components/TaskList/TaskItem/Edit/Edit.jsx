import "./edit.scss";
import React from "react";
import {TodoAppContext} from '../../../App/context';
import edit from "./img/edit.png";

export const Edit = ({ id }) => {

  return (
      <img src={edit} className="important" alt="img" />
    
  );
};
