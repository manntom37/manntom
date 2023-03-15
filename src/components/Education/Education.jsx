import React from "react";
import "./Education.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Education = () => {
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
        <h2 className="heroText">Education</h2>
        <p className="heroP1">
          I have a BA in{" "}
          <span className="underlineNice">Professional Musicianship</span>, and
          an MA in <span className="underlineNice">Popular Music Practice</span>
          , for which I received a distinction.
        </p>
        <p className="heroP2">
          Following my MA, I completed an intense 13 week{" "}
          <span className="underlineNice">Full Stack Development</span> bootcamp
          at <span className="underlineNice">Northcoders</span>.
        </p>
      </div>{" "}
      <div className="introTextRight">
        <p className="heroP1">
          After finishing my BA and MA in Music, I was interested in finding
          other ways to express my creativity.
        </p>
        <p className="heroP2">
          After hearing about the course through friends, I enrolled on
          Northcoders' Full Stack Development bootcamp in November 2021, and
          covered topics such as <span className="underlineNice">HTML</span>,{" "}
          <span className="underlineNice">CSS</span>,{" "}
          <span className="underlineNice">Javascript</span>,{" "}
          <span className="underlineNice">React</span>,{" "}
          <span className="underlineNice">PSQL</span> and{" "}
          <span className="underlineNice">TDD</span>.
        </p>
        <p className="heroP2">
          While the course covered both front and back end, I found myself drawn
          to <span className="underlineNice">front end development</span>.
        </p>
        <p className="heroP2">
          For the final project at Northcoders, my group made a gig finder app
          using React Native, where users could log in, find gigs using a map
          API, as well as post gigs. For this project, I focused on front end
          development, and the app can be seen{" "}
          <span className="underlineNice">
            <a
              style={{
                color: darkMode ? "#a28ecf" : "#7d6b9f",
              }}
              className="noTextDec"
              href="https://northcoders.com/projects/march-2022/herd"
            >
              here
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Education;
