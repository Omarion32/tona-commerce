import React from "react";
import Tonaimg from "../image/tona2.png"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

import "./header.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../util/Firebaseconfig";

function Header() {
  const [{ basket,user }, dispach] = useStateValue();
  const handleout = ()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={Tonaimg}
          alt=""
        />
      </Link>
      <div className="header_search_bar">
        <input className="Header_serch_input" type="text" />
        <SearchIcon className="Search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_opstion" onClick={handleout}>
            <div className="header_option_lineone">Hello {!user? 'customer' :user?.email}</div>
            <div className="header_option_linetwo">{user? 'sign out' :'sign in' }</div>
          </div>
        </Link>
        <Link to={'/orders'}>
        <div className="header_opstion">
          <div className="header_option_lineone">returns</div>
          <div className="header_option_linetwo">&Orders</div>
        </div>
        </Link>
        <div className="header_opstion">
          <div className="header_option_lineone">your</div>
          <div className="header_option_linetwo">Prime</div>
        </div>
      </div>
      <Link to="checkouts">
        <div className="Header_basket">
          <ShoppingBasketIcon />
          <div className="header_option_linetwo header_counter">
            {basket.length}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
