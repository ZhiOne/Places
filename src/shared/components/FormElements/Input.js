import React, { useEffect, useReducer } from "react";

import "./Input.css"
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value:action.value,
        isValid:validate(action.value , action.vaidators)
      };
    case "TOUCH":
      return {
        ...state,
        isTouched:true,
      };
    default:
      return state;
  }
};

const Input = props => {
  const {id , onInput , element, label, errorText, cols , placeholder , type , validators} = props;

  const [inputState , dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid:props.valid || false,
    isTouched:false
  });

  const {value , isValid , isTouched} = inputState;



  useEffect(() => {
    onInput(id , value, isValid)
  },[value, isValid, id , onInput]);

  const changeHandler = event => {
    dispatch({
      type:"CHANGE",
      value: event.target.value,
      validators
    })
  };

  const touchHandler = () => {
    dispatch({
      type:"TOUCH",
    });
  };

  const el = element === "input" ? (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={value}
    />
  ) : (
    <textarea
      id={id}
      cols={cols || 3}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={value}
    />
  );

  return (
    <div className={`form-control ${!isValid && isTouched &&"form-control--invalid"}`}>
      <label htmlFor={id}>
        {label}
      </label>
      {el}
      {!isValid && isTouched && <p>{errorText}</p>}
    </div>
  )
};

export default Input;
