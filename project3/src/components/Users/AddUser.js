import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [error, setError] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(name, age);
    if (name.trim().length === 0 || age === 0) {
      setTitle("Invalid Input");
      setMessage("Please enter a valid name and age");
      setError(true);
      return;
    }
    if (!(age > 0)) {
      setTitle("Invalid Input");
      setMessage("Please enter a valid age (> 0)");
      setAge(0);
      setError(true);
      return;
    }
    const data = { name, age, id: Math.random() };
    props.addUser(data);
  };

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangedHandler = (e) => {
    if (age<0){
      setAge(0);
      return;
    }else{

      setAge(parseInt(e.target.value));
    }
  };

  const closeErrorHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={title}
          message={message}
          handleClick={closeErrorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={nameChangedHandler}
          />
          <label htmlFor="number">Age(Years) </label>
          <input
            type="text"
            name="number"
            value={age}
            onChange={ageChangedHandler}
            min='0'
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
