import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
        <ul>
        {props.users.map((user,index) => {
            return (
            <li key={user.id}>
                {user.name} ({user.age} years Old)
            </li>
            );
        })}
        </ul>
    </Card>
  );
};

export default UsersList;
