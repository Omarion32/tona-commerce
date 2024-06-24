import React from "react";
import Wolaytaimg from "../../components/image/wolaita - Copy.png"
import "./chekout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProducts from "./Checkoutproduct";
import { useStateValue } from "../../components/StateProvider/StateProvider";

function Chekout() {
  const [{basket},dispatch] = useStateValue()
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="chekout_ad"
            src={Wolaytaimg}
            alt=""
          />
          <h3>Hello</h3>
          <h2 className="chekout_title"> Your Shopping Basket</h2>
          {basket.map((items)=>(

          <CheckoutProducts id={items.id}
          title={items.title}
          image={items.img}
          price={items.price} 
          rating={items.rating}/>
          ))}
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Chekout;
