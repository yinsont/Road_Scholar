import { useState, useEffect, createContext } from "react";

export const MyContext = createContext({
  scores: [],
  newAnswer: () => {},
});

function MyProvider({ children }) {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/scores')
    .then((res) => res.json())
    .then((data) => {
      data.sort(function(a, b){return a.overallScore-b.overallScore})
      setScores(data);
    });
  }, [])

  const newAnswer = (answer) => {
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
          [...scores, data].sort(function(a, b){return a.overallScore-b.overallScore})
        )
      });
  };

  return (
    <MyContext.Provider
      value={{ scores: scores, newAnswer: newAnswer }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
