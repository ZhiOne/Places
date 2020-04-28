import React, { useState, useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  }, false);

  const submitAuth = event => {
    event.preventDefault();
    const { inputs } = formState;
    console.log(inputs);
    auth.login();
  };

  const switchModeHandler = event => {
    event.preventDefault();
    if (!isLoginMode){
      setFormData({
        ...formState.inputs,
        name:undefined,
      },formState.inputs.email.isValid && formState.inputs.password.isValid);
    }else {
      setFormData({
        ...formState.inputs,
        name:{
          value:"",
          isValid:false
        }
      },false)
    }
    setIsLoginMode(prevState => !prevState);
  };

  return (
    <Card className="authentication">
      <h2>Login Required!</h2>
      <hr />
      <form onSubmit={submitAuth}>
        {!isLoginMode && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please , enter the name. "
            onInput={inputHandler}
          />
          )}
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE]}
          errorText="Please enter valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter valid password (min.8 characters) ."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN UP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO
        {isLoginMode ? " SIGN UP" : " LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
