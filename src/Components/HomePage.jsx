// src/components/HomePage.jsx

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import voice1 from '../assets/voice1.webp'
import voice2 from '../assets/voice2.webp'
import voice3 from '../assets/voice3.png'
import voice4 from '../assets/voice4.jpeg'
import voice5 from '../assets/voice5.jpg'






const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNavigate = () => {
    navigate('/ipa-chart');
  };
  


  const description = `
    The Tactile English Phonetic Alphabets Chart is an innovative tool designed to help visually impaired individuals learn and understand the phonetic sounds of the English language. This chart incorporates tactile elements that allow users to feel and recognize different phonetic symbols, making language learning more accessible and interactive.
     Each symbol on the chart is paired with a corresponding sound, an example word, and a detailed description, ensuring comprehensive learning.

    This tactile chart is particularly beneficial for users who rely on touch as their primary means of learning. By integrating Braille representations alongside the phonetic symbols, the chart provides a dual sensory experience, enhancing the retention and understanding of phonetic concepts. The use of Braille not only aids in the recognition of phonetic symbols but also helps in the pronunciation and articulation of sounds, facilitating a more effective language learning process.

    The chart is designed to be user-friendly, with clearly marked sections for consonants, monothongs, and diphthongs. Each section is organized in a logical sequence, allowing users to easily navigate through the different sounds and symbols. The interactive nature of the chart encourages users to engage with the material, promoting active learning and participation.

    Additionally, the Tactile English Phonetic Alphabets Chart includes audio support, providing auditory feedback for each phonetic sound. This feature is especially useful for learners who benefit from hearing the sounds in addition to feeling the symbols. The audio component reinforces the learning experience, helping users to associate the tactile symbols with their corresponding sounds accurately.

    This chart is a valuable resource for educators and learners alike. Teachers can use it as a teaching aid to demonstrate phonetic sounds in a tactile and auditory manner, while students can use it for self-study and practice. The chart's comprehensive approach ensures that all aspects of phonetic learning are covered, making it an indispensable tool for anyone looking to master English phonetics.

    In summary, the Tactile English Phonetic Alphabets Chart is an exceptional educational tool that combines tactile, auditory, and visual elements to provide a holistic learning experience. It is designed to cater to the needs of visually impaired learners, making phonetic learning accessible, engaging, and effective. Whether used in a classroom setting or for individual study, this chart is a powerful aid in the journey of mastering English phonetics.
  `;

  const slides = [
    { image: voice1 },
    { image: voice2 },
    { image: voice3 },
    { image: voice4 },
    { image: voice5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="homepage" style={{ minHeight: '100vh', padding: '20px', color: 'black' }}>
      <section className="header" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>Tactile English Phonetic Alphabets Chart</h1>
      </section>
      <section className="top-content" style={{ display: 'flex', marginBottom: '70px' }}>
        <div className="slider" style={{ flex: 1, textAlign: 'center' }}>
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            style={{ width: '80%', height: '400px', objectFit: 'cover', margin: '0 auto' }}
          />
        </div>
        <div className="description" style={{ flex: 1, paddingLeft: '20px', fontSize: '16px', lineHeight: '1.6', height: '400px' }}>
          {description.split('\n\n').slice(0, 3).join('\n\n')}
        </div>
      </section>
      <section className="remaining-description" style={{ paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', lineHeight: '1.6', marginTop: '20px' }}>
        {description.split('\n\n').slice(3).join('\n\n')}
      </section>
      <section className="button" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleNavigate} className="navigate-button" style={{ padding: '10px 20px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Go to IPA Chart
        </button>
      </section>
    </div>
  );
};

export default HomePage;
