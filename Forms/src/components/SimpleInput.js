import { useRef, useState } from "react";
import {useValidator} from "./hooks/use-validator";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  
  let emailIsValid = enteredEmail.includes("@");
  function nameInputHandler(event) {
    setEnteredName(event.target.value);
    if (nameInputRef.current.value==="") {
      setEnteredNameIsValid(false);
    }else{
      setEnteredNameIsValid(true);
    }
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (emailIsValid) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid email");
    }
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameIsValid) {
      props.onSubmit(enteredName);
      setEnteredName("");
      nameInputRef.current.focus();
    }
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={(e) => nameInputHandler(e)}
        />
        {!enteredNameIsValid && <p className="error-text">Name cannot be empty</p>}
        
      </div>
      <div className='form-control'>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail.email}
          onChange={(e)=>emailChangeHandler(e)}
        />
        {!emailIsValid && <p className="error-text">{errorMessage}</p>}
        
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
