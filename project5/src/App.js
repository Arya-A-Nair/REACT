import React, { useState, useEffect } from "react";
import AuthContext from "./components/Store/auth-context";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, loginHandler, logoutHandler }}
        >
            <MainHeader />
            <main>
                {!isLoggedIn && <Login />}
                {isLoggedIn && <Home  />}
            </main>
        </AuthContext.Provider>
    );
}

export default App;
