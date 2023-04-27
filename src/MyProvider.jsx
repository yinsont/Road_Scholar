import { useState, useEffect, createContext } from "react";

export const MyContext = createContext({
  scores: [],
  onNewAnswer: () => {},
  inGame: null,
  onStartGame: () => {},
  timeRemaining: 10,
  setTimeRemaining: () => {},
});

function MyProvider({ children }) {

  const [scores, setScores] = useState([]);
  const [inGame, setInGame] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    fetch('http://localhost:4000/scores')
    .then((res) => res.json())
    .then((data) => {
      data.sort(function(a, b){return b.overallScore-a.overallScore})
      setScores(data);
    });
  }, [])

  const onNewAnswer = (answer) => {
    fetch("http://localhost:4000/scores", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => {
        setScores(
          [...scores, data].sort(function(a, b){return b.overallScore-a.overallScore})
        )
      });
  };

  function onStartGame(bool) {
    setInGame(bool)
  };

  function onResetTime(seconds) {
    setTimeRemaining(seconds)
  }

  return (
    <MyContext.Provider
      value={{ 
        scores: scores, 
        onNewAnswer: onNewAnswer, 
        inGame: inGame, 
        onStartGame: onStartGame, 
        timeRemaining: timeRemaining, 
        onResetTime: onResetTime 
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;