import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./product.css";






function Product({ id, title, price, rating, img }) {
  const [{ basket }, dispach] = useStateValue();
  // console.log('this is the baseket',basket);
  const addtobasket = () => {
    // e.preventDefault()
    dispach({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p className="title">{title}</p>
        <p className="product_price">
          <small>ETB</small>
          <strong>{price}</strong>
        </p>
        <div className="product_ratings">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <div key={i}>
                  <p>⭐</p>
                </div>
              ))}
          </p>
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
