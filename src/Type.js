import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      
      options={{
        strings: [
          "Full Stack Web Developer",
          "MERN Stack Developer",
          "Love Design"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;