import { useState } from 'react';

const Statistics = ({good, neutral, bad, all, average, positivePercentage}) => {
  if (all > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positivePercentage}%</p>
        </div>
      </div>
    );
  }
  return (
    <p>No feedback given</p>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [points, setPoints] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleGoodClick = () => {
    const newValue = good + 1;
    const total = all + 1;
    const newPoints = points + 1;
    const newAverage = newPoints / total;
    const newPositivePercentage = (newValue / total) * 100;

    setAll(total);
    setPoints(newPoints);
    setAverage(newAverage);
    setGood(newValue);
    setPositivePercentage(newPositivePercentage);
  }

  const handleNeutralClick = () => {
    const newValue = neutral + 1;
    const total = all + 1;
    const newPoints = points;
    const newAverage = newPoints / total;
    const newPositivePercentage = (good / total) * 100;
  
    setAll(total);
    setPoints(newPoints);
    setAverage(newAverage);
    setNeutral(newValue);
    setPositivePercentage(newPositivePercentage);
  }

  const handleBadClick = () => {
    const newValue = bad + 1;
    const total = all + 1;
    const newPoints = points - 1;
    const newAverage = newPoints / total;
    const newPositivePercentage = (good / total) * 100;

    setAll(total);
    setPoints(newPoints);
    setAverage(newAverage);
    setBad(newValue);
    setPositivePercentage(newPositivePercentage);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App