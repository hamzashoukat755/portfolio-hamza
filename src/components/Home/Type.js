import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          ".NET Developer",
          "C# Developer",
          "ASP.NET MVC Developer",
          "PHP Developer",
          "Laravel Developer",
          "React Native Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
