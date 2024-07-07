import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState(null);

  const data = useMemo(
    () => [
      {
        id: 1,
        question: "What is the capital of Japan?",
        answers: [
          { text: "A. Beijing", correct: false },
          { text: "B. Tokyo", correct: true },
          { text: "C. Seoul", correct: false },
          { text: "D. Bangkok", correct: false },
        ],
      },
      {
        id: 2,
        question: "What chemical element is designated as “Hg”?",
        answers: [
          { text: "A. Silver", correct: false },
          { text: "B. Tin", correct: false },
          { text: "C. Copper", correct: false },
          { text: "D. Mercury", correct: true },
        ],
      },
      {
        id: 3,
        question: "What gas is used to extinguish fires?",
        answers: [
          { text: "A. Oxygen", correct: false },
          { text: "B. Nitrogen", correct: true },
          { text: "C. Carbon dioxide", correct: false },
          { text: "D. Hydrogen", correct: false },
        ],
      },
      {
        id: 4,
        question: "Which one is the hottest continent?",
        answers: [
          { text: "A. Africa", correct: true },
          { text: "B. South Asia", correct: false },
          { text: "C. North America", correct: false },
          { text: "D. Australia", correct: false },
        ],
      },
      {
        id: 5,
        question: "How many bones are in the body of an adult human?",
        answers: [
          { text: "A. 330", correct: false },
          { text: "B. 206", correct: true },
          { text: "C. 250", correct: false },
          { text: "D. 210", correct: false },
        ],
      },
      {
        id: 6,
        question: "What element is the main constituent of diamonds?",
        answers: [
          { text: "A. Carbon", correct: true },
          { text: "B. Oxygen", correct: false },
          { text: "C. Silver", correct: false },
          { text: "D. Gold", correct: false },
        ],
      },
      {
        id: 7,
        question:
          'Which planet in the solar system is known as the “Morning Star” or “Evening Star”?',
        answers: [
          { text: "A. Mars", correct: false },
          { text: "B. Venus", correct: true },
          { text: "C. Mercury", correct: false },
          { text: "D. Jupiter", correct: false },
        ],
      },
      {
        id: 8,
        question:
          "Which organ in the human body is responsible for secreting insulin?",
        answers: [
          { text: "A. Liver", correct: false },
          { text: "B. Kidneys", correct: false },
          { text: "C. Pancreas", correct: true },
          { text: "D. Lungs", correct: false },
        ],
      },
      {
        id: 9,
        question: "What chemical element is used in the manufacture of glass?",
        answers: [
          { text: "A. Silver", correct: false },
          { text: "B. Sodium", correct: false },
          { text: "C. Silicon", correct: true },
          { text: "D. Oxygen", correct: false },
        ],
      },
      {
        id: 10,
        question:
          "In which country did the Chernobyl nuclear disaster take place?",
        answers: [
          { text: "A. Russia", correct: false },
          { text: "B. Ukraine", correct: true },
          { text: "C. Belarus", correct: false },
          { text: "D. Turkey", correct: false },
        ],
      },
      {
        id: 11,
        question: "Which river is the second longest in the world?",
        answers: [
          { text: "A. Amazon", correct: false },
          { text: "B. Yangtze", correct: true },
          { text: "C. Nile", correct: false },
          { text: "D. Mississippi", correct: false },
        ],
      },
      {
        id: 12,
        question: "What is the largest lake in the world?",
        answers: [
          { text: "A. Caspian Sea", correct: true },
          { text: "B. Baikal", correct: false },
          { text: "C. Lake Superior", correct: false },
          { text: "D. Ontario", correct: false },
        ],
      },
      {
        id: 13,
        question: "Entomology is the science that studies:",
        answers: [
          { text: "A. Behavior of human beings", correct: false },
          { text: "B. Insects", correct: true },
          { text: "C. The origin and history of technical and scientific terms", correct: false },
          { text: "D. The formation of rocks", correct: false },
        ],
      },
      {
        id: 14,
        question: "What year was the first man sent to space?",
        answers: [
          { text: "A. 1957", correct: false },
          { text: "B. 1961", correct: true },
          { text: "C. 1969", correct: false },
          { text: "D. 1975", correct: false },
        ],
      },
    ],
    {
        id: 15,
        question: "What year did the Titanic sink?",
        answers: [
          { text: "A. 1905", correct: false },
          { text: "B. 1912", correct: true },
          { text: "C. 1910", correct: false },
          { text: "D. 1915", correct: false },
        ],
      },
  
    []
  );

  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNumber > 1) {
      const amount = moneyPyramid.find((m) => m.id === questionNumber - 1).amount;
      setEarned(amount);
    }
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
