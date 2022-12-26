import React from "react";
// import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { SingleSurveyPage } from "./components/SingleSurveyPage/SingleSurveyPage";
import { Navbar } from "./components/Navbar/Navbar";
import { CreateSurveyPage } from "./components/CreateSurveyPage/CreateSurveyPage";

function App() {
  // const name = useSelector((state) => state.currentUser.name);
  const isLoggedIn = true; // change to Boolean(name);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            exact
            path="/surveys/:surveyId"
            element={
              isLoggedIn ? (
                <SingleSurveyPage />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route
            path="/create-survey"
            element={
              isLoggedIn ? (
                <CreateSurveyPage />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
