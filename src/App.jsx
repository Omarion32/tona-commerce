import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth } from "./util/Firebaseconfig";
import SharedLayout from "./pages/SharedLayout";
import Home from "./components/home/Home";
import Login from "./pages/loginpage/Login";
import Chekout from "./pages/chekout/Chekout";
import Payment from "./components/payment/Payment";
import Orders from "./pages/orders/Orders";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const Promise = loadStripe(
    "pk_test_51PL7ynLk6A9w0TYBTgR9rQ08Wkq34EVYS9x21vnEhJFwDoXuTIODlKqxwAEPpLQrMnMBufhnScMqyNcF0d2KOGYN00TEQbrZun"
  );
  const [{}, dipatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dipatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dipatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/checkouts" element={<Chekout />} />
          { <Route path="/login" element={<Login />} /> }
          <Route
            path="payment"
            element={
              <Elements stripe={Promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          
        </Route>
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
