import React from "react";

//Header component with searchbar and responsive item count for cart.

export default function Header(props) {
  return (
    <header className="titlebar row center">
      <div>
        <form className="search" action="#/">
          <input type="text" placeholder="Search Products..." name="search" />
          {/* <button type="submit">
            <i class="fa fa-search"></i>
          </button> */}
        </form>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>
      </div>
    </header>
  );
}
