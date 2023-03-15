import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Play = () => {
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
        <h2 className="heroText">Play</h2>
        <p className="heroP1">
          I'm currently learning <span className="underlineNice">C#</span>,{" "}
          <span className="underlineNice">Unity</span>, and{" "}
          <span className="underlineNice">Blender</span> in my spare time.
        </p>
        <p className="heroP2">
          I'm really enjoying learning these topics, and I'm in the process of{" "}
          <i>slowly</i> learning to make a{" "}
          <span className="underlineNice">game!</span>
        </p>
      </div>{" "}
      <div className="introTextRight">
        <p className="heroP1">
          It's my hope that I can create a game using only game assets / prefabs
          / audio that
          <span className="underlineNice"> I've made myself.</span>
        </p>
        <p className="heroP2">
          I'm mostly learning through{" "}
          <span className="underlineNice">Udemy</span>,{" "}
          <span className="underlineNice">YouTube</span>, and about three
          hundred and seventy
          <span className="underlineNice"> StackOverflow</span> threads.
        </p>
        <p className="heroP2">
          The game is going to be a cross between old school{" "}
          <span className="underlineNice">Harvest Moon</span>, and the best show
          ever made, <span className="underlineNice">Lost</span>.
        </p>
        <p className="heroP2">
          I've really enjoying mixing in my love of{" "}
          <span className="underlineNice">music</span>,{" "}
          <span className="underlineNice">code</span>, and{" "}
          <span className="underlineNice">gaming</span> for this project so far,
          and I'm excited to see how it develops!
        </p>
      </div>
    </div>
  );
};

export default Play;
