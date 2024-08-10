// Results.js

import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Results = () => {
  const location = useLocation();
  const { questions, answers } = location.state;
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="results-page">
      <h2>Results</h2>
      {questions.map((q, index) => (
        <div key={index} className="result-block">
          <p>{q.question}</p>
          <p>
            Your answer: {answers[index]}{' '}
            {answers[index] === q.correct ? '✔️' : '❌'}
          </p>
          {answers[index] !== q.correct && (
            <p>Correct answer: {q.correct}</p>
          )}
        </div>
      ))}
      <button style={{ margin: '50px' }} onClick={handleBackToHome}>
        Back to Homepage
      </button>
    </div>
  );
};

export default Results;
