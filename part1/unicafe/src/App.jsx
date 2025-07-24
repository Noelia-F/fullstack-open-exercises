import { useState } from 'react';

const Statistics = ({good, neutral, bad, all, average, positivePercentage}) => {
  if (all > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>
          <StatisticLine name='good' data={good} />
          <StatisticLine name='neutral' data={neutral} />
          <StatisticLine name='bad' data={bad} />
          <StatisticLine name='all' data={all} />
          <StatisticLine name='average' data={average} />
          <StatisticLine name='positive' data={positivePercentage} />
        </div>
      </div>
    );
  }
  return (
    <p>No feedback given</p>
  );
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const StatisticLine = ({name, data}) => {
  return(
    <p>{name} {data}</p>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [points, setPoints] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState('0%');

  const handleGoodClick = () => {
    const newValue = good + 1;
    const total = all + 1;
    const newPoints = points + 1;
    const newAverage = newPoints / total;
    const newPositivePercentage = `${(newValue / total) * 100}%`;

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
    const newPositivePercentage = `${(good / total) * 100}%`;
  
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
    const newPositivePercentage = `${(good / total) * 100}%`;

    setAll(total);
    setPoints(newPoints);
    setAverage(newAverage);
    setBad(newValue);
    setPositivePercentage(newPositivePercentage);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App