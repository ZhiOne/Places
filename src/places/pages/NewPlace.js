import React, { useCallback, useReducer } from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT-CHANGE":
      // eslint-disable-next-line no-case-declarations
      let formIsValid = true;
      // eslint-disable-next-line no-restricted-syntax
      for (const inputId in state.inputs) {
        // eslint-disable-next-line no-prototype-builtins
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address:{
        value:"",
        isValid:false,
      }
    },
    isValid: false,
  });

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT-CHANGE",
      value,
      isValid,
      inputId: id,
    });
  }, []);

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        type="text"
        label="Title"
        id="title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please, enter a valid description (at least 5 characters) ."
        onInput={inputHandler}
      />
      <Input
        type="text"
        label="Address"
        id="address"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
