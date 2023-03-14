import React from "react";
import "./Footer.css";
import { FiCoffee } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      made with <FiCoffee className="footerIcons" /> and{" "}
      <AiFillHeart className="footerIcons" /> by tom mann.
    </div>
  );
};

export default Footer;
