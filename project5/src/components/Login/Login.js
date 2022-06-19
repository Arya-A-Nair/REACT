import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import AuthContext from "../Store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.length >= 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.length >= 6 };
    }
};

const Login = () => {

    const emailRef=useRef();
    const passwordRef=useRef();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });

        // setFormIsValid(
        //   emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
        authContext.loginHandler(emailState.value, passwordState.value);
        }else if(!emailState.isValid){
            emailRef.current.activate();
        }
        else if(!passwordState.isValid){
            passwordRef.current.activate();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    value={emailState.value}
                    isValid={emailState.isValid}
                    label="Email"
                    id="email"
                    type="email"
                    ref={emailRef}
                ></Input>
                <Input
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    value={passwordState.value}
                    isValid={passwordState.isValid}
                    label="Password"
                    id="password"
                    type="password"
                    ref={passwordRef}
                />
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
