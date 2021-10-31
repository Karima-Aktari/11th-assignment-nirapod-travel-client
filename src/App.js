import './App.css';
import React from "react";
import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import Header from "../src/Pages/Shared/Header/Header";
import Footer from "../src/Pages/Shared/Footer/Footer";
import Home from "../src/Pages/Home/Home/Home";
import Booking from './Pages/Home/Booking/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './Pages/Home/Booking/AddService/AddService';
import NotFound from './NotFound/NotFound';
import MyOrders from './Pages/Home/Booking/MyOrders/MyOrders';
import ManageOrders from './Pages/Home/Booking/ManageOrders/ManageOrders';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
