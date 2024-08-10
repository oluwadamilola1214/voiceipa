import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SoundComponent from './SoundComponent';
import './IPAChart.css'

const IPAChart = () => {
  const [currentContent, setCurrentContent] = useState(null);
  const [currentSymbol, setCurrentSymbol] = useState(null);
  const [clicks, setClicks] = useState({});
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/exercise');
  };

  const monophthongs = ['/i:/', '/i/', '/e/', '/ɒ/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
  const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
  const diphthongs = ['/eɪ/', '/əu/', '/aɪ/', '/ɔɪ/', '/æ/', '/ɪə/', '/eə/', '/ʊə/'];

  const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

  const examplesMonophthongs = {
    'i:': 'meet', 'i': 'hit', 'e': 'bed', 'ɒ': 'cat', 'a:': 'cart', 'ɔ:': 'saw', 'ʊ': 'put', 'u:': 'boot', 'ʌ': 'cut', 'ʒ:': 'treasure', 'ə': 'sofa',
  };

  const examplesConsonants = {
    'p': 'pat', 'b': 'bat', 't': 'tap', 'd': 'dip', 'k': 'kit', 'g': 'gap', 'tʃ': 'chin', 'dʒ': 'gin', 'f': 'fan', 'v': 'van', 's': 'sip', 'z': 'zip', 'θ': 'thin', 'ð': 'then', 'ʃ': 'ship', 'h': 'hat', 'l': 'lip', 'r': 'rip', 'w': 'win', 'j': 'yes', 'm': 'mat', 'n': 'nap', 'ŋ': 'sing',
  };

  const examplesDiphthongs = {
    'eɪ': 'say', 'əu': 'go', 'aɪ': 'my', 'ɔɪ': 'boy', 'æ': 'how', 'ɪə': 'near', 'eə': 'hair', 'ʊə': 'tour',
  };

  const descriptionsMonophthongs = {
    'i:': 'Front close unrounded vowel', 'i': 'Front close unrounded vowel', 'e': 'Front mid unrounded vowel', 'ɒ': 'Front near-open unrounded vowel', 'a:': 'Back open unrounded vowel', 'ɔ:': 'Back open-mid rounded vowel', 'ʊ': 'Back close rounded vowel', 'u:': 'Back close rounded vowel', 'ʌ': 'Back open-mid unrounded vowel', 'ʒ:': 'Mid central unrounded vowel', 'ə': 'Mid central unrounded vowel',
  };

  const descriptionsConsonants = {
    'p': 'Voiceless bilabial plosive', 'b': 'Voiced bilabial plosive', 't': 'Voiceless alveolar plosive', 'd': 'Voiced alveolar plosive', 'k': 'Voiceless velar plosive', 'g': 'Voiced velar plosive', 'tʃ': 'Voiceless postalveolar affricate', 'dʒ': 'Voiced postalveolar affricate', 'f': 'Voiceless labiodental fricative', 'v': 'Voiced labiodental fricative', 's': 'Voiceless alveolar fricative', 'z': 'Voiced alveolar fricative', 'θ': 'Voiceless dental fricative', 'ð': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', 'h': 'Voiceless glottal fricative', 'l': 'Alveolar lateral approximant', 'r': 'Alveolar approximant', 'w': 'Labio-velar approximant', 'j': 'Palatal approximant', 'm': 'Bilabial nasal', 'n': 'Alveolar nasal', 'ŋ': 'Velar nasal',
  };

  const descriptionsDiphthongs = {
    'eɪ': 'Diphthong - closing (Front close unrounded vowel)', 'əu': 'Diphthong - closing (Back close rounded vowel)', 'aɪ': 'Diphthong - closing (Front close unrounded vowel)', 'ɔɪ': 'Diphthong - closing (Front close unrounded vowel)', 'æ': 'Diphthong - closing (Back close rounded vowel)', 'ɪə': 'Diphthong - closing (Front close unrounded vowel)', 'eə': 'Diphthong - closing (Front open-mid unrounded vowel)', 'ʊə': 'Diphthong - closing (Back close rounded vowel)',
  };

  const brailleRepresentationsMonophthongs = {
    'i:': '2 4', 'i': '2 4', 'e': '1 5', 'ɒ': '1', 'a:': '1 1', 'ɔ:': '1 3 1', 'ʊ': '1 3 6', 'u:': '1 3 6 2 4', 'ʌ': '5 1', 'ʒ:': '1 3 5 4', 'ə': '5',
  };

  const brailleRepresentationsConsonants = {
    'p': '1 2 3 4', 'b': '1 2', 't': '2 3 4 5', 'd': '1 4 5', 'k': '1 3', 'g': '1 2 4 5', 'tʃ': '2 4 6', 'dʒ': '1 4 5 6', 'f': '1 2 4', 'v': '1 2 3 6', 's': '3 4', 'z': '1 3 5 6', 'θ': '1 4 5 6', 'ð': '1 4 5 6', 'ʃ': '1 4 6', 'h': '1 2 5', 'l': '1 2 3', 'r': '1 2 3 5', 'w': '2 4 5 6', 'j': '2 4 5', 'm': '1 3 4', 'n': '1 3 4 5', 'ŋ': '1 2 4 5',
  };

  const brailleRepresentationsDiphthongs = {
    'eɪ': '1 5 2 4', 'əu': '5 1 3 6', 'aɪ': '1 2 4', 'ɔɪ': '1 3 2 4', 'æ': '1 1 3 6', 'ɪə': '2 4 5', 'eə': '1 5 5', 'ʊə': '1 3 6 5',
  };

  const keyToSymbolMapping = {
    p: 'p', b: 'b', t: 't', d: 'd', k: 'k', g: 'g', T: 'tʃ', D: 'dʒ', f: 'f', v: 'v', s: 's', z: 'z', O:'θ', Q: 'ð', F:'ʃ', h: 'h', l: 'l', r: 'r', w: 'w', j: 'j', m: 'm', n: 'n', N: 'ŋ', i: 'ɪ', I: 'i', e: 'e', a: 'ɒ', A: 'ɑ', C: 'ɔ', 'u': 'ʊ', U: 'u', V: 'ʌ', Z: 'ʒ', E: 'ə', 1: 'eɪ', 2: 'əʊ', 3: 'aɪ', 4: 'ɔɪ', 5: 'æ', 6: 'ɪə', 7: 'eə', 8: 'ʊə',
  };

  const getDescription = (symbol) => {
    if (descriptionsMonophthongs[symbol]) {
      return descriptionsMonophthongs[symbol];
    } else if (descriptionsConsonants[symbol]) {
      return descriptionsConsonants[symbol];
    } else if (descriptionsDiphthongs[symbol]) {
      return descriptionsDiphthongs[symbol];
    }
    return 'Description not available';
  };

  const getExample = (symbol) => {
    if (examplesMonophthongs[symbol]) {
      return examplesMonophthongs[symbol];
    } else if (examplesConsonants[symbol]) {
      return examplesConsonants[symbol];
    } else if (examplesDiphthongs[symbol]) {
      return examplesDiphthongs[symbol];
    }
    return 'Example not available';
  };

  const getBrailleRepresentation = (symbol) => {
    if (brailleRepresentationsMonophthongs[symbol]) {
      return brailleRepresentationsMonophthongs[symbol];
    } else if (brailleRepresentationsConsonants[symbol]) {
      return brailleRepresentationsConsonants[symbol];
    } else if (brailleRepresentationsDiphthongs[symbol]) {
      return brailleRepresentationsDiphthongs[symbol];
    }
    return 'Braille representation not available';
  };

  const handleButtonClick = (symbol) => {
    let symbolClicks = clicks[symbol] || 0;
    symbolClicks = (symbolClicks + 1) % 4;

    setClicks((prevClicks) => ({
      ...prevClicks,
      [symbol]: symbolClicks,
    }));


    let content = '';
    
    switch (symbolClicks % 4) {
      case 0:
        setCurrentContent(getExample(symbol));
        break;
      case 1:
        setCurrentContent(`Sounds: ${symbol}`);
        break;
      case 2:
        setCurrentContent(getDescription(symbol));
        break;
      case 3:
        setCurrentContent(getBrailleRepresentation(symbol));
        break;
      default:
        setCurrentContent('Unknown content');
    }

    setCurrentSymbol(symbol);
    setCurrentContent(content);
    speakText(content); // Call the speakText function to read aloud the content
  };

  const speakText = (text) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };



  const handleKeyPress = (event) => {
    const symbol = keyToSymbolMapping[event.key];
    if (symbol) {
      handleButtonClick(symbol);
    }
  };

  

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [clicks]);

  return (
    <div className="ipa-chart">
      
      <h1> IPA Chart</h1>

      <div>
        <p>Sound: {currentSymbol}</p>
        {currentSymbol && <SoundComponent symbol={currentSymbol} />}
      </div>

      <h2>CONSONANTS</h2>
      {consonants.map((symbol, index) => (
        <button key={index} onClick={() => handleButtonClick(symbol)} >
          {symbol}
        </button>
      ))}

      <h2>DIPHTHONGS</h2>
      {diphthongs.map((symbol, index) => (
        <button key={index} onClick={() => handleButtonClick(symbol)}>
          {symbol}
        </button>
      ))}

      <h2>MONOPHTHONGS</h2>
      {monophthongs.map((symbol, index) => (
        <button key={index} onClick={() => handleButtonClick(symbol)}className="symbol-button">
          {symbol}
        </button>
      ))}
      {currentContent && (
        <div className="content">
          <h2> {currentSymbol}</h2>
          <p>{currentContent}</p>
          
        </div>
        
      )}
      <button onClick={handleNavigate}>Go to Exercise</button>
    </div>
  );
};

export default IPAChart;
