/** @format */

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// importing SWIPER
// eslint-disable-next-line
// import "swiper/css/bundle";

import React, { useState } from "react";

// Importing components
// import Checkout from "./Components/Checkout.js";
// import Event from "./containers/Event";
// import EventsAll from "./containers/EventsAll";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import NotFound from "../src/Pages/Notfound";
import SearchEvents from "./Pages/SearchEvents";

// Routing
import { Route, Routes } from "react-router-dom";
import GeneralAdmin from "./Pages/Dashboard/GeneralAdmin";
import Login from "./Pages/Login";
// Using this one at the moment to sign up..
import Join from "./Pages/Join";

// importing contexts
import { CategoriesProvider } from "./Contexts/CategoriesContext";
// import Test from "./containers/Test";
import { EventProvider } from "./Contexts/EventContext";
import { UsersProvider } from "./Contexts/UsersContext";
// Importing the Events providor to access the fetch
import { EventsProvider } from "./Contexts/EventsContext";
import { CartProvider } from "./Contexts/CartContext";

// DASHBOARD

import EventsDash from "./Pages/Dashboard/EventsDash";
import Customers from "./Pages/Dashboard/Customers";
import Orders from "./Pages/Dashboard/Orders";
import Overview from "./Pages/Dashboard/Overview";
import EventsList from "./Pages/Dashboard/EventsList";
import EditEvent from "./Pages/Dashboard/EditEvent";
import AddEvent from "./Pages/Dashboard/AddEvent";
import EventLayout from "./Pages/EventLayout";
import EventInfo from "./Pages/EventInfo";
import Info from "./Pages/Info";
import Feed from "./Pages/Feed";
import PostPurchase from "./Pages/PostPurchase";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <EventsProvider>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path='/category/:type'
              element={
                <CategoriesProvider>
                  {/* <Test /> */}
                  <Category />
                </CategoriesProvider>
              }
            />

            <Route path='/search' element={<SearchEvents />} />
            {/* THIS IS THE ONE THAT WILL DISPLAY IN THE MAIN THE SPECIFIC TYPE OF EVENTS AND THEN WE WILL FILTER AND ADD BUTTONS, */}
            {/* <Route path='/Events/:type' element={<Event />} /> */}
            {/* <Route path='/EventsAll' element={<EventsAll />} /> */}
            {/* <Route path='/Checkout' element={<Checkout />} /> */}
            {/* Path to the sign in and log in */}
            {/* Path to the company admin page  */}
            {/* Path to the genrela admin page  */}
          </Route>
          {/* This is the one im using right now... */}

          {/* ---------------------------*/}
          {/* ----------DASHBOARD--------*/}
          {/* ---------------------------*/}

          <Route path='/admin' element={<GeneralAdmin />}>
            <Route index element={<Overview />} />
            <Route path='customers' element={<Customers />} />
            <Route path='orders' element={<Orders />} />
            <Route path='events' element={<EventsDash />}>
              <Route index element={<EventsList />} />
              <Route path='edit' element={<EditEvent />} />
              <Route path='add' element={<AddEvent />} />
            </Route>
          </Route>

          {/* LOGIN */}

          <Route
            path='/login'
            element={
              <UsersProvider>
                <Login />
              </UsersProvider>
            }
          />
          <Route
            path='/register'
            element={
              <UsersProvider>
                <Join />{" "}
              </UsersProvider>
            }
          />

          <Route
            path='/event/:name'
            element={
              <CartProvider>
                <EventProvider>
                  <EventLayout />
                </EventProvider>
              </CartProvider>
            }>
            <Route index element={<EventInfo />} />
            <Route path='info' element={<Info />} />
            <Route path='feed' element={<Feed />} />
          </Route>

          <Route path='/purchase/:order' element={<PostPurchase />} />
          <Route path='*' element={<NotFound />} />

          {/* <Route path='/Checkout' element={<Checkout />} /> */}
        </Routes>
      </div>
    </EventsProvider>
  );
}

export default App;
