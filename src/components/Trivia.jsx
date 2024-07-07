import { useState, useEffect } from "react";
import { Howl } from 'howler';
import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";
import musicSound from "../assets/music.mp3";

const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const correctHowl = new Howl({ src: [correctSound] });
  const wrongHowl = new Howl({ src: [wrongSound] });
  const musicHowl = new Howl({ src: [musicSound], loop: true });
  // React compares the current values of data and questionNumber to their previous values and only re-runs the effect if there is a change.
  // React compares the current values of data and questionNumber to their previous values and only re-runs the effect if there is a change.

  useEffect(() => {
    if (data.length > 0) {
      setQuestion(data[questionNumber - 1]);
    }
  }, [data, questionNumber]);

  // This useEffect will run when questionNumber changes, assuming this coincides with the timer starting.
  useEffect(() => {
    if (questionNumber) {
      musicHowl.play();
    }
    return () => {
      musicHowl.stop();
    };
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };
  // User Clicks "B. Tokyo"
  
  //   The onClick event for "B. Tokyo" is triggered.
  //   Since selectedAnswer is null, !selectedAnswer evaluates to true.
  //   handleClick(a) is called with a being the answer object for "B. Tokyo".
  //   handleClick(a) sets selectedAnswer to the clicked answer, 
  //   updates the class name, and processes the game logic for correct/incorrect answers.

  // If the user now tries to click "A. Beijing":

  //   The onClick event for "A. Beijing" is triggered.
  //   Since selectedAnswer is not null (it's set to the answer for "B. Tokyo"), !selectedAnswer evaluates to false.
  //   handleClick(a) is not called, and no further action is taken.

// The user cannot change their answer or select multiple answers for the same question.

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
//     Set Selected Answer: Marks the clicked answer as selected by setting selectedAnswer to a.
// Update Class Name: Changes the class name to "answer active" to visually indicate the selection.
  
    delay(3000, () => {
      // Introduces a 3-second delay before proceeding, allowing time for the user to see the selection.
      
      if (a.correct) {
        correctHowl.play(); // Play correct sound
        setClassName("answer correct");
      } else {
        wrongHowl.play(); // Play wrong sound
        setClassName("answer wrong");
// Play Sound: Depending on whether a is correct, it plays the appropriate sound.
// Update Class Name: Changes the class name to indicate correctness ("answer correct")
//  or wrongness ("answer wrong").
      }

      delay(3000, () => {
        // Introduces another 3-second delay after playing the sound and updating the class name, 
      // allowing the user to process the feedback.
        if (a.correct) {
          // If Correct:

    // Reset Class Name: Changes the class name back to "answer".
    // Short Delay (1 second): Adds a short delay before moving to the next question.
    // Increment Question Number: Updates questionNumber to proceed to the next question.
    // Reset Selection: Resets selectedAnswer to null for the next question.
          
          setClassName("answer"); // Reset class name
          delay(1000,()=>{
            setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null); // Reset selected answer
          });
        } else {
          // If Incorrect:

    // Short Delay (1 second): Adds a short delay before stopping the game.
    // Stop Game: Sets setStop(true) to end the game.
          delay(1000,()=>{
            setStop(true);
          });
        }
      });
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.text} // Ensure each answer has a unique key
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)} // Prevent multiple clicks
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;