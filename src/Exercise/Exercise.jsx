import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercise.css'

const questions = [
  { question: 'What is the IPA symbol for the sound in "see"?', options: ['A. /i:/', 'B. /e/', 'C. /a/', 'D. /ɔ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "cat"?', options: ['A. /u:/', 'B. /æ/', 'C. /ʊ/', 'D. /ɒ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "goat"?', options: ['A. /ɪ/', 'B. /ʌ/', 'C. /oʊ/', 'D. /ɛ/'], correct: 'C' },
  { question: 'Which IPA symbol represents the sound in "boot"?', options: ['A. /u:/', 'B. /i:/', 'C. /ɑ:/', 'D. /ɔ:/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "thought"?', options: ['A. /ɒ/', 'B. /ɔ:/' , 'C. /ə/', 'D. /ʊ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. /e/', 'B. /ɜ:/' , 'C. /ʌ/', 'D. /æ/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "dress"?', options: ['A. /e/', 'B. /æ/' , 'C. /ʊ/', 'D. /i:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "trap"?', options: ['A. /æ/', 'B. /ɑ:/' , 'C. /ɛ/', 'D. /ɒ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/', 'B. /u:/' , 'C. /ɔ:/' , 'D. /ə/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. /ʌ/', 'B. /ɒ/' , 'C. /ʊ/', 'D. /e/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. /i:/', 'B. /ɪ/' , 'C. /ɛ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "bath"?', options: ['A. /ɑ:/', 'B. /æ/' , 'C. /ɔ:/' , 'D. /ɒ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "happy"?', options: ['A. /i:/', 'B. /i/' , 'C. /ə/', 'D. /æ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "lot"?', options: ['A. /ɒ/', 'B. /ɔ:/' , 'C. /ɜ:/', 'D. /ɛ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "goose"?', options: ['A. /u:/', 'B. /ʊ/' , 'C. /ɒ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. /ɪ/', 'B. /i:/', 'C. /ɛ/', 'D. /e/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/' , 'B. /æ/', 'C. /ʌ/', 'D. /ɑ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. /ʌ/', 'B. /æ/' , 'C. /ɪ/', 'D. /i:/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "price"?', options: ['A. /aɪ/', 'B. /eɪ/', 'C. /ɔɪ/', 'D. /əʊ/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "mouth"?', options: ['A. /aʊ/', 'B. /aɪ/', 'C. /eɪ/', 'D. /ɔɪ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "choice"?', options: ['A. /eɪ/', 'B. /ɔɪ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "near"?', options: ['A. /ɪə/', 'B. /eə/', 'C. /ʊə/', 'D. /aɪ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "square"?', options: ['A. /ʊə/', 'B. /ɪə/', 'C. /eə/', 'D. /aɪ/'], correct: 'C' },
  { question: 'Which IPA symbol represents the sound in "cure"?', options: ['A. /ɪə/', 'B. /ʊə/', 'C. /eə/', 'D. /ɔɪ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "face"?', options: ['A. /eɪ/', 'B. /ɔɪ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "goat"?', options: ['A. /eɪ/', 'B. /əʊ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/' , 'B. /æ/', 'C. /ʌ/', 'D. /ɑ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. /ʌ/', 'B. /ɒ/' , 'C. /ʊ/', 'D. /e/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. /i:/', 'B. /ɪ/' , 'C. /ɛ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. /ɪ/', 'B. /i:/', 'C. /ɛ/', 'D. /e/'], correct: 'A' },
];

const soundFiles = {
  '/i:/': '../../public/sounds/i.mp3',
  '/e/': '../../public/sounds/e.mp3',
  '/a/': '/path/to/a-sound.mp3',
  '/ɔ:/': '/path/to/ɔ-sound.mp3',
  '/æ/': '/path/to/æ-sound.mp3',
  '/ʊ/': '/path/to/ʊ-sound.mp3',
  '/ɒ/': '/path/to/ɒ-sound.mp3',
  // Add other symbols and their paths...
};

const Exercise = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showDialog, setShowDialog] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowDialog(true);
    setTimeout(() => {
      setShowDialog(false);
      navigate('/results', { state: { questions, answers } });
    }, 2000); // Adjust the duration as needed (e.g., 2000ms = 2 seconds)
  };

  const speakText = (text) => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    if (symbol) {
      const audio = new Audio(soundFiles[symbol]);
      audio.play();
    }
  };

  const handleQuestionClick = (index) => {
    const questionText = `Question ${index + 1}. ${questions[index].question}`;
    const optionsText = questions[index].options.join(', ');
    speakText(`${questionText} Options: ${optionsText}`);
  };

  const handleRepeatClick = (index) => {
    handleQuestionClick(index);
  };

  return (
    <div className="exercise-page">
      <h1>IPA Exercise</h1>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <p onClick={() => handleQuestionClick(index)} style={{ cursor: 'pointer' }}>
            {index + 1}. {q.question}
          </p>
          {q.options.map((option, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option[0]}
                checked={answers[index] === option[0]}
                onChange={() => handleAnswerChange(index, option[0])}
              />
              {option}
            </label>
          ))}
          <button onClick={() => handleRepeatClick(index)}>Repeat</button>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showDialog && (
        <div className="dialog">
          <p>Submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;


