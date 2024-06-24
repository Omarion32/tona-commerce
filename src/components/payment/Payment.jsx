import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

import "./Payment.css";
import Checkoutproducts from "../../pages/chekout/Checkoutproduct";
import { useStateValue } from "../StateProvider/StateProvider";
import  {axiosInstance} from "../../axios";
import { db } from "../../util/Firebaseconfig";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const getbaskettotal = (basket) =>
    basket?.reduce((amount, items) => amount + items.price, 0);

  const [error, seterror] = useState(null);
  const [disable, setDisable] = useState(true);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setclientSecret] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getClientside = async () => {
      const response = await axiosInstance({
        method: "Post",
        url: `/payments/create?total=${getbaskettotal(basket) * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };
    getClientside();
  }, [basket]);

  console.log(" client sectrer", clientSecret);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent?.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSuccess(true);
          setProcessing(false);
          seterror(null);

          dispatch({
            type: "EMPTY_BASKET",
          });
          navigate("/orders");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlechange = (e) => {
    setDisable(e.empty);
    seterror(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      hh
      <div className="container_payment">
        <h1 className="chekout_paymnet">
          Chekout(<Link to="/checkouts">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_titel">
            <h3>Deliver Address</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>123 line adress</p>
            <p>WOLAITA SODDO</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_titel">
            <h3>Reveiw item and Delivery</h3>
          </div>
          <div className="paymnet_items">
            {basket.map((items) => (
              <Checkoutproducts
                id={items.id}
                title={items.title}
                image={items.img}
                price={items.price}
                rating={items.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_titel">
            <h3>Payment Methode</h3>
          </div>
          <div className="payment_detail">
            <form onSubmit={handlesubmit}>
              <CardElement onChange={handlechange} />

              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getbaskettotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
              <button
                className="paymnet_butn"
                disabled={disable || processing || success}
              >
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
      <div className="bank">
       <h1>Account Number</h1>
       <ul className="lists"><li>Awash:027145563900</li>
       <li>Cbe:1000464789131</li>
       <li>Telebirr:0939637379</li>
       <li>cbebirr:0939637379</li></ul>
       <p className="file">please provide us screenshot of your payment:
       <input type="file" id="myFile" name="filename"/>
 <p className="sub"><input type="submit" /></p> 
    
       
       </p> 

      </div>
    </div>
  );
}

export default Payment;


