import React, { useRef } from "react";
import "./Start.css"; // Ensure the path is correct
import quiz_image from "../components/quiz_image.jpg"; // Import your local image

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value) {
      setUsername(inputRef.current.value);
    }
  };

  return (
    <div className="startContainer">
      <h1 className="title" style={{ 
        marginBottom: "20px", 
        color: "white", 
        fontSize: "4em", 
        textAlign: "center", 
           fontFamily: '"Lato", sans-serif'
      }}>MILLIONAIRE QUIZ</h1>
      <div className="start">
        <input
          className="startInput"
          placeholder="Enter Your Name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          START QUIZ
        </button>
        <img
          src={quiz_image} // Use the imported local image here
          alt="Quiz Image"
          className="startImage"
        />
      </div>
    </div>
  );
}
