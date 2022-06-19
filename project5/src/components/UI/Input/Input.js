import React,{useImperativeHandle} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {

    const inputRef = React.useRef();

    const activate=()=>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref,()=>{
        return {
            activate
        }
    })


    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={inputRef}
            />
        </div>
    );
});

export default Input;
