import React from "react";
import "./Intro.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="wholePage"
      style={{
        background: darkMode ? "#232221" : "#fffbed",
        color: darkMode ? "#a28ecf" : "#7d6b9f",
      }}
    >
      <div className="introText">
        <h2 className="heroText">Hey! I'm Tom Mann.</h2>
        <p className="heroP1">
          I'm a Front End Developer with an interest in all things creative
          coding.
        </p>
        <p className="heroP2">
          I primarily use <span className="underlineNice">React</span>,{" "}
          <span className="underlineNice">JavaScript</span>,{" "}
          <span className="underlineNice">HTML</span>, and{" "}
          <span className="underlineNice">CSS</span>. In my spare time, I'm
          teaching myself <span className="underlineNice">C#</span>,{" "}
          <span className="underlineNice">Unity</span>, and{" "}
          <span className="underlineNice">Blender</span>.
        </p>
        <p className="links">
          <motion.a
            href="https://www.linkedin.com/in/tom-mann-codes/"
            target="_blank"
            className="linkNone"
            style={{
              color: darkMode ? "#a28ecf" : "#7d6b9f",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            <BsLinkedin className="linkIcons" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/manntom37"
            className="linkNone"
            target="_blank"
            style={{
              color: darkMode ? "#a28ecf" : "#7d6b9f",
            }}
          >
            <BsGithub className="linkIcons" />
          </motion.a>
        </p>
      </div>
    </div>
  );
};

export default Intro;
