import React, { useContext } from "react";
import AuthContext from "../Store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
    const authContext = useContext(AuthContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {authContext.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {authContext.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {authContext.isLoggedIn && (
                    <li>
                        <button onClick={authContext.logoutHandler}>
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
