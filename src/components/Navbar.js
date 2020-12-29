import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductCount } from "../actions/getAction";
import { Route, Link } from "react-router-dom";

function Navbar(props) {
  // console.log(props);

  useEffect(() => {
    getProductCount();
  }, []);

  return (
    <header className="header">
      <div className="overlay"></div>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">
              <ion-icon className="cart-icon" name="cart-outline"></ion-icon>
              Cart
              <span> ({props.basketProps.basketCount})</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState
});

export default connect(mapStateToProps, { getProductCount })(Navbar);
