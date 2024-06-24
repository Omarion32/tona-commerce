import React from "react";
import moment from "moment/moment";

import "./order.css";
import CheckoutProducts from "../chekout/Checkoutproduct";
import CurrencyFormat from "react-currency-format";

function Order({order}) {
  return (
    <div className="order">
      <h1>Order</h1>
      <p>{moment.unix(order.data.created).format("MMM Do YYY,h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((items) => (
        <CheckoutProducts
          id={items.id}
          title={items.title}
          image={items.img}
          price={items.price}
          rating={items.rating}
          hideButton
        />
      ))}

      <CurrencyFormat 
        renderText={(value) => <h3 className="order_total">Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator={true}
        prefix="ETB"
        
      />
    </div>
  );
}

export default Order;
