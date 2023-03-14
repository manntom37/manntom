import React from "react";
import "./Work.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Work = () => {
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
      <div
        className="introText"
        style={{
          background: darkMode ? "#232221" : "#fffbed",
          color: darkMode ? "#a28ecf" : "#7d6b9f",
        }}
      >
        <h2 className="heroText">Work</h2>
        <p className="heroP1">
          I currently work as the sole developer at{" "}
          <span className="underlineNice">Telesgop</span>, a Welsh multimedia
          production company.
        </p>
        <p className="heroP2">
          Here, I have created a range of products for clients including the{" "}
          <span className="underlineNice">Welsh Government</span> and{" "}
          <span className="underlineNice">Coleg Cymraeg</span>.{" "}
        </p>
      </div>{" "}
      <div
        className="introTextRight"
        style={{
          background: darkMode ? "#232221" : "#fffbed",
          color: darkMode ? "#a28ecf" : "#7d6b9f",
        }}
      >
        <p className="heroP1">
          I mostly work on{" "}
          <span className="underlineNice">educational projects</span> at
          Telesgop, such as{" "}
          <span className="underlineNice">Our Welsh History</span>, a project
          focusing on the history of Black, Asian, and Minority Ethnicities in
          Wales.
        </p>
        <p className="heroP2">
          As these sites are primarily used in schools, working with regards to
          <span className="underlineNice"> a11y standards</span> is a must.
        </p>
        <p className="heroP2">
          Whilst working at Telesgop, I have also been in charge of editing 360
          videos with <span className="underlineNice">Premiere Pro</span>, and
          learning <span className="underlineNice">Photoshop</span>.
        </p>
        <p className="heroP2">
          All sites I have created at Telesgop have been{" "}
          <span className="underlineNice">bilingual</span> - in English and
          Welsh. For this, <span className="underlineNice">React Context</span>{" "}
          has been used extensively!
        </p>
        <p className="heroP2">
          For this site, Context has been used for the{" "}
          <span className="underlineNice">dark / light mode </span>
          feature. Check it out in the navbar!
        </p>
      </div>
    </div>
  );
};

export default Work;
