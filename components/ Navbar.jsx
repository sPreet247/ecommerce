import Link from "next/link.js";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Beats PRO</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
      <Cart />
    </div>
  );
};

export default Navbar;
