import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";
import FooterComp from "./routes/comp/FooterComp";
import HeaderComp from "./routes/comp/HeaderComp";
import Profile from "./routes/profile/Profile";

import ScrollToTop from "./ScrollToTop";
import AddFeed from "./routes/add_feed/AddFeed";
import FeedView from "./routes/comp/FeedView";


const App = () => {
  return (
    <AuthProvider>
      <Router>

        <ScrollToTop />
        <div className="App">
          <HeaderComp />

          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />


          
          <PrivateRoute exact path="/" component={DashBoard} />
          <PrivateRoute exact path="/DashBoard" component={DashBoard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/add_feed" component={AddFeed} />
          <PrivateRoute exact path="/feed/:feed_id" component={FeedView} />


          
          
  

          <FooterComp />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
