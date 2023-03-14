import React from "react";
import "./Navbar.css";
import { BsSun } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoClose, IoIosClose, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  const [style, setStyle] = useState("noModal");
  const [isOpen, setIsOpen] = useState(false);

  let handleInfo = () => {
    if (style === "noModal") setStyle("modal");
    else if (style === "modal") setStyle("noModal");
  };

  const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div
      className="navbarMain"
      style={{
        background: darkMode ? "#232221" : "#fffbed",
        color: darkMode ? "#a28ecf" : "#7d6b9f",
      }}
    >
      <div className="navbarLeft">
        <Link to={"/"}>
          <motion.div
            className="homeDiv"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillHome className="navbarHome"></AiFillHome>
          </motion.div>
        </Link>
      </div>
      <div className="navbarRight">
        <motion.div
          className="homeDiv"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          <BsSun className="navLightMode" />
        </motion.div>
        <motion.div
          className="homeDiv"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMenu
            className="navBurger"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />{" "}
        </motion.div>
      </div>
      <motion.div
        className="modal"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", damping: 19 }}
      >
        <div
          className="innerModal"
          style={{
            background: darkMode ? "#a28ecf" : "#7d6b9f",
            color: darkMode ? "#232221" : "#fffbed",
          }}
        >
          <div className="innerText">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <IoIosClose
                className="crossImg"
                style={{ transform: " scale(3) " }}
              />
            </motion.div>
          </div>{" "}
          <div className="innerTextInfo">
            <Link to={"/work"} style={{ "text-decoration": "none" }}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                style={{
                  background: darkMode ? "#a28ecf" : "#7d6b9f",
                  color: darkMode ? "#232221" : "#fffbed",
                }}
              >
                Work
              </motion.h2>
            </Link>
            <Link to={"/play"} style={{ "text-decoration": "none" }}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                style={{
                  background: darkMode ? "#a28ecf" : "#7d6b9f",
                  color: darkMode ? "#232221" : "#fffbed",
                }}
              >
                Play
              </motion.h2>
            </Link>
            <Link to={"/education"} style={{ "text-decoration": "none" }}>
              <motion.h2
                className="notesH2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                style={{
                  background: darkMode ? "#a28ecf" : "#7d6b9f",
                  color: darkMode ? "#232221" : "#fffbed",
                }}
              >
                Education
              </motion.h2>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
