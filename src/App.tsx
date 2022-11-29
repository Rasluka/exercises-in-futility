import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { IUser, ICurrentUser } from "./interfaces/users.interface";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import SignIn from "./components/users/SignIn";
import Register from "./components/users/Register";
import { getCurrentUser, getUserById } from "./services/userService";

function App() {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const onGetCurrentUserSuccces = useCallback((response: ICurrentUser) => {
    console.log(response);
    getUserById(response.id)
      .then(onGetUserByIdSuccces)
      .catch(onGetUserByIdError);
  }, []);

  const onGetCurrentUserError = () => {};

  const onGetUserByIdSuccces = (response: any) => {
    console.log(response);
    setCurrentUser({ ...response });
  };

  const onGetUserByIdError = () => {};

  useEffect(() => {
    getCurrentUser().then(onGetCurrentUserSuccces).catch(onGetCurrentUserError);
  }, [onGetCurrentUserSuccces]);

  return (
    <>
      <NavigationBar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn currentUser={currentUser} />} />
        <Route
          path="/register"
          element={<Register currentUser={currentUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
