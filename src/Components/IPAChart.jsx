// import { useState, useEffect } from 'react';
// import SoundComponent from '../Components/SoundComponent';
// import './IPAChart.css';
// import speakText from './speakText';
// import { useNavigate } from "react-router-dom";

// const IPAChart = () => {
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate('/exercise');
//   };

//   const [clicks, setClicks] = useState({
//     '/p/': 0, '/b/': 0, '/t/': 0, '/d/': 0, '/k/': 0, '/g/': 0, '/tʃ/': 0, '/dʒ/': 0, '/f/': 0, '/v/': 0,
//     '/s/': 0, '/z/': 0, '/θ/': 0, '/ð/': 0, 'ʃ': 0, '/h/': 0, '/l/': 0, '/r/': 0, '/w/': 0, '/j/': 0,
//     '/m/': 0, '/n/': 0, '/ŋ/': 0,
//     '/i:/': 0, '/i/': 0, 'e': 0, '/a/': 0, '/a:/': 0, '/ɔ:/': 0, '/ʊ/': 0, '/u:/': 0, '/ʌ/': 0, '/ʒ:/': 0, '/ə/': 0,
//     '/ei/': 0, '/əu/': 0, '/ai/': 0, '/ɔi/': 0, '/ɑu/': 0, '/iə/': 0, '/eə/': 0, '/uə/': 0,
//   });

//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [currentContent, setCurrentContent] = useState(null);

//   const monothongs = ['/i:/', '/i/', '/e/', '/a/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
//   const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
//   const diphthongs = ['/ei/', '/əu/', '/ai/', '/ɔi/', '/ɑu/', '/iə/', '/eə/', '/uə/'];
//   const allSymbols = [...monothongs, ...consonants, ...diphthongs];

//   const examplesMonothongs = {
//     '/i:/': 'see, tree, bee, green',
//     '/i/': 'sit, bit, kit, lit',
//     '/e/': 'bed, red, head, said',
//     '/a/': 'cat, hat, bat, mat',
//     '/a:/': 'car, far, star, jar',
//     '/ɔ:/': 'saw, law, straw, draw',
//     '/ʊ/': 'book, look, cook, hook',
//     '/u:/': 'blue, true, clue, glue',
//     '/ʌ/': 'cup, sun, fun, run',
//     '/ʒ:/': 'treasure, measure, leisure, pleasure',
//     '/ə/': 'about, sofa, banana, panda',
//   };
//   const examplesConsonants = {
//     '/p/': 'pen, pet, pot, pat',
//     '/b/': 'bat, bet, bit, bot',
//     '/t/': 'tap, tip, top, tan',
//     '/d/': 'dog, dig, dot, dad',
//     '/k/': 'cat, kit, cut, cot',
//     '/g/': 'goat, gate, gum, gas',
//     '/tʃ/': 'chop, chip, chat, check',
//     '/dʒ/': 'jam, jug, jet, job',
//     '/f/': 'fish, fan, fit, fat',
//     '/v/': 'van, vet, vote, vine',
//     '/s/': 'sit, sun, sip, sad',
//     '/z/': 'zoo, zip, zap, zig',
//     '/θ/': 'think, thin, thick, thorn',
//     '/ð/': 'this, that, these, those',
//     'ʃ': 'shoe, shop, ship, show',
//     '/h/': 'hat, hot, hit, hut',
//     '/l/': 'leg, lip, lot, lap',
//     '/r/': 'rat, rip, rot, run',
//     '/w/': 'win, wet, wag, will',
//     '/j/': 'yes, yellow, yard, yawn',
//     '/m/': 'man, mat, map, mug',
//     '/n/': 'nap, net, nip, nod',
//     '/ŋ/': 'sing, ring, long, song',
//   };

//   const examplesDiphthongs = {
//     '/ei/': 'day, say, play, way',
//     '/əu/': 'no, so, go, toe',
//     '/ai/': 'my, try, buy, cry',
//     '/ɔi/': 'boy, toy, joy, coin',
//     '/ɑu/': 'now, how, cow, town',
//     '/iə/': 'near, fear, dear, tear',
//     '/eə/': 'air, hair, care, fair',
//     '/uə/': 'sure, pure, tour, cure',
//   };

//   const descriptionsMonophthongs = {
//     '/i:/': 'Long close front unrounded vowel',
//     '/i/': 'Short close front unrounded vowel',
//     '/e/': 'Mid front unrounded vowel',
//     '/a/': 'Front open unrounded vowel',
//     '/a:/': 'Back open unrounded vowel',
//     '/ɔ:/': 'Long open-mid back rounded vowel',
//     '/ʊ/': 'Short close back rounded vowel',
//     '/u:/': 'Long close back rounded vowel',
//     '/ʌ/': 'Open-mid back unrounded vowel',
//     '/ʒ:/': 'Voiced postalveolar fricative',
//     '/ə/': 'Mid central vowel (schwa)',
//   };

//   const descriptionsConsonants = {
//     '/p/': 'Voiceless bilabial plosive',
//     '/b/': 'Voiced bilabial plosive',
//     '/t/': 'Voiceless alveolar plosive',
//     '/d/': 'Voiced alveolar plosive',
//     '/k/': 'Voiceless velar plosive',
//     '/g/': 'Voiced velar plosive',
//     '/tʃ/': 'Voiceless postalveolar affricate',
//     '/dʒ/': 'Voiced postalveolar affricate',
//     '/f/': 'Voiceless labiodental fricative',
//     '/v/': 'Voiced labiodental fricative',
//     '/s/': 'Voiceless alveolar fricative',
//     '/z/': 'Voiced alveolar fricative',
//     '/θ/': 'Voiceless dental fricative',
//     '/ð/': 'Voiced dental fricative',
//     'ʃ': 'Voiceless postalveolar fricative',
//     '/h/': 'Voiceless glottal fricative',
//     '/l/': 'Voiced alveolar lateral approximant',
//     '/r/': 'Voiced alveolar approximant',
//     '/w/': 'Voiced labio-velar approximant',
//     '/j/': 'Voiced palatal approximant',
//     '/m/': 'Voiced bilabial nasal',
//     '/n/': 'Voiced alveolar nasal',
//     '/ŋ/': 'Voiced velar nasal',
//   };

//   const descriptionsDiphthongs = {
//     '/ei/': 'Closing diphthong moving from mid front unrounded to close front unrounded',
//     '/əu/': 'Closing diphthong moving from mid central to close back rounded',
//     '/ai/': 'Closing diphthong moving from open front unrounded to close front unrounded',
//     '/ɔi/': 'Closing diphthong moving from open-mid back rounded to close front unrounded',
//     '/ɑu/': 'Closing diphthong moving from open back unrounded to close back rounded',
//     '/iə/': 'Centred diphthong moving from close front unrounded to mid central',
//     '/eə/': 'Centred diphthong moving from mid front unrounded to mid central',
//     '/uə/': 'Centred diphthong moving from close back rounded to mid central',
//   };

//   const brailleRepresentationsMonothongs = {
//     '/i:/': '24-24-34',
//     '/i/': '24',
//     '/e/': '15',
//     '/a/': '1',
//     '/a:/': '1-24',
//     '/ɔ:/': '13-24',
//     '/ʊ/': '136',
//     '/u:/': '136-24',
//     '/ʌ/': '13',
//     '/ʒ:/': '135-24',
//     '/ə/': '1-15',
//   };

//   const brailleRepresentationsConsonants = {
//     '/p/': '1234',
//     '/b/': '12',
//     '/t/': '2345',
//     '/d/': '145',
//     '/k/': '13',
//     '/g/': '1245',
//     '/tʃ/': '1345-1234',
//     '/dʒ/': '145-1345',
//     '/f/': '124',
//     '/v/': '1236',
//     '/s/': '234',
//     '/z/': '1356',
//     '/θ/': '2345-145',
//     '/ð/': '145-1346',
//     'ʃ': '146',
//     '/h/': '125',
//     '/l/': '123',
//     '/r/': '1235',
//     '/w/': '2456',
//     '/j/': '24',
//     '/m/': '134',
//     '/n/': '1345',
//     '/ŋ/': '1346',
//   };

//   const brailleRepresentationsDiphthongs = {
//     '/ei/': '15-24',
//     '/əu/': '1-24-136',
//     '/ai/': '1-24',
//     '/ɔi/': '13-15',
//     '/ɑu/': '1-136',
//     '/iə/': '24-1-15',
//     '/eə/': '15-1-15',
//     '/uə/': '136-1-15',
//   };

//   const updateSymbolContent = (symbol) => {
//     setClicks(prevClicks => ({
//       ...prevClicks,
//       [symbol]: (prevClicks[symbol] + 1) % 4,
//     }));

//     switch ((clicks[symbol] + 1) % 4) {
//       case 0:
//         setCurrentContent(null);
//         break;
//       case 1:
//         setCurrentContent(examplesMonothongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]);
//         break;
//       case 2:
//         setCurrentContent(descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]);
//         break;
//       case 3:
//         setCurrentContent(brailleRepresentationsMonothongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]);
//         break;
//       default:
//         setCurrentContent(null);
//         break;
//     }
//   };

//   const handleKeyPress = (event) => {
//     const keyPressed = event.key.toLowerCase();
//     const keyMap = {
//       '1': '/i:/', '2': '/i/', '3': '/e/', '4': '/a/', '5': '/a:/', '6': '/ɔ:/', '7': '/ʊ/', '8': '/u:/', '9': '/ʌ/', '0': '/ʒ:/', '-': '/ə/',
//       'q': '/p/', 'w': '/b/', 'e': '/t/', 'r': '/d/', 't': '/k/', 'y': '/g/', 'u': '/tʃ/', 'i': '/dʒ/', 'o': '/f/', 'p': '/v/',
//       'a': '/s/', 's': '/z/', 'd': '/θ/', 'f': '/ð/', 'g': 'ʃ', 'h': '/h/', 'j': '/l/', 'k': '/r/', 'l': '/w/', ';': '/j/',
//       'z': '/m/', 'x': '/n/', 'c': '/ŋ/',
//       'b': '/ei/', 'n': '/əu/', 'm': '/ai/', ',': '/ɔi/', '.': '/ɑu/', '/': '/iə/', '': '/eə/', '=': '/uə/',
//     };

//     if (keyMap[keyPressed]) {
//       const symbol = keyMap[keyPressed];
//       setCurrentSymbol(symbol);
//       updateSymbolContent(symbol);
//     }
//   };

//   useEffect(() => {
//     if (currentSymbol) {
//       const clickCount = clicks[currentSymbol];
//       let content = '';
//       switch (clickCount % 4) {
//         case 0:
//           content = `Example for ${currentSymbol}`;
//           break;
//         case 1:
//           content = `Sound of ${currentSymbol}`;
//           break;
//         case 2:
//           content = `Description of ${currentSymbol}`;
//           break;
//         case 3:
//           content = `Braille representation of ${currentSymbol}`;
//           break;
//         default:
//           break;
//       }
//       setCurrentContent(content);
//       speakText(content);
//     }
//   }, [currentSymbol, clicks]);

//   const handleClick = (symbol) => {
//     setClicks(prevClicks => ({
//       ...prevClicks,
//       [symbol]: prevClicks[symbol] + 1
//     }));
//     setCurrentSymbol(symbol);
//   };

//   return (
//     <div className="ipa-chart">
//       <h1>IPA Chart</h1>
    
//       <div className="symbols">
//         {allSymbols.map(symbol => (
//           <button key={symbol} onClick={() => handleClick(symbol)} className="symbol-button">
//             {symbol}
//           </button>
//         ))}
//       </div>
//       {currentSymbol && (
//         <div className="symbol-content">
//           <h2>{currentSymbol}</h2>
//           <p>{currentContent}</p>
//           <SoundComponent symbol={currentSymbol} />
//         </div>
//       )}
//         <button onClick={handleNavigate}>Go to Exercise</button>
//     </div>
//   );
// };

// export default IPAChart;


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SoundComponent from './SoundComponent';
// import './IPAChart.css'

// const IPAChart = () => {
//   const [currentContent, setCurrentContent] = useState(null);
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [clicks, setClicks] = useState({});
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/exercise');
//   };

//   const monophthongs = ['/i:/', '/i/', '/e/', '/ɒ/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
//   const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
//   const diphthongs = ['/eɪ/', '/əu/', '/aɪ/', '/ɔɪ/', '/æ/', '/ɪə/', '/eə/', '/ʊə/'];

//   const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

//   const examplesMonophthongs = {
//     'i:': 'meet', 'i': 'hit', 'e': 'bed', 'ɒ': 'cat', 'a:': 'cart', 'ɔ:': 'saw', 'ʊ': 'put', 'u:': 'boot', 'ʌ': 'cut', 'ʒ:': 'treasure', 'ə': 'sofa',
//   };

//   const examplesConsonants = {
//     'p': 'pat', 'b': 'bat', 't': 'tap', 'd': 'dip', 'k': 'kit', 'g': 'gap', 'tʃ': 'chin', 'dʒ': 'gin', 'f': 'fan', 'v': 'van', 's': 'sip', 'z': 'zip', 'θ': 'thin', 'ð': 'then', 'ʃ': 'ship', 'h': 'hat', 'l': 'lip', 'r': 'rip', 'w': 'win', 'j': 'yes', 'm': 'mat', 'n': 'nap', 'ŋ': 'sing',
//   };

//   const examplesDiphthongs = {
//     'eɪ': 'say', 'əu': 'go', 'aɪ': 'my', 'ɔɪ': 'boy', 'æ': 'how', 'ɪə': 'near', 'eə': 'hair', 'ʊə': 'tour',
//   };

//   const descriptionsMonophthongs = {
//     'i:': 'Front close unrounded vowel', 'i': 'Front close unrounded vowel', 'e': 'Front mid unrounded vowel', 'ɒ': 'Front near-open unrounded vowel', 'a:': 'Back open unrounded vowel', 'ɔ:': 'Back open-mid rounded vowel', 'ʊ': 'Back close rounded vowel', 'u:': 'Back close rounded vowel', 'ʌ': 'Back open-mid unrounded vowel', 'ʒ:': 'Mid central unrounded vowel', 'ə': 'Mid central unrounded vowel',
//   };

//   const descriptionsConsonants = {
//     'p': 'Voiceless bilabial plosive', 'b': 'Voiced bilabial plosive', 't': 'Voiceless alveolar plosive', 'd': 'Voiced alveolar plosive', 'k': 'Voiceless velar plosive', 'g': 'Voiced velar plosive', 'tʃ': 'Voiceless postalveolar affricate', 'dʒ': 'Voiced postalveolar affricate', 'f': 'Voiceless labiodental fricative', 'v': 'Voiced labiodental fricative', 's': 'Voiceless alveolar fricative', 'z': 'Voiced alveolar fricative', 'θ': 'Voiceless dental fricative', 'ð': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', 'h': 'Voiceless glottal fricative', 'l': 'Alveolar lateral approximant', 'r': 'Alveolar approximant', 'w': 'Labio-velar approximant', 'j': 'Palatal approximant', 'm': 'Bilabial nasal', 'n': 'Alveolar nasal', 'ŋ': 'Velar nasal',
//   };

//   const descriptionsDiphthongs = {
//     'eɪ': 'Diphthong - closing (Front close unrounded vowel)', 'əu': 'Diphthong - closing (Back close rounded vowel)', 'aɪ': 'Diphthong - closing (Front close unrounded vowel)', 'ɔɪ': 'Diphthong - closing (Front close unrounded vowel)', 'æ': 'Diphthong - closing (Back close rounded vowel)', 'ɪə': 'Diphthong - closing (Front close unrounded vowel)', 'eə': 'Diphthong - closing (Front open-mid unrounded vowel)', 'ʊə': 'Diphthong - closing (Back close rounded vowel)',
//   };

//   const brailleRepresentationsMonophthongs = {
//     'i:': '2 4', 'i': '2 4', 'e': '1 5', 'ɒ': '1', 'a:': '1 1', 'ɔ:': '1 3 1', 'ʊ': '1 3 6', 'u:': '1 3 6 2 4', 'ʌ': '5 1', 'ʒ:': '1 3 5 4', 'ə': '5',
//   };

//   const brailleRepresentationsConsonants = {
//     'p': '1 2 3 4', 'b': '1 2', 't': '2 3 4 5', 'd': '1 4 5', 'k': '1 3', 'g': '1 2 4 5', 'tʃ': '2 4 6', 'dʒ': '1 4 5 6', 'f': '1 2 4', 'v': '1 2 3 6', 's': '3 4', 'z': '1 3 5 6', 'θ': '1 4 5 6', 'ð': '1 4 5 6', 'ʃ': '1 4 6', 'h': '1 2 5', 'l': '1 2 3', 'r': '1 2 3 5', 'w': '2 4 5 6', 'j': '2 4 5', 'm': '1 3 4', 'n': '1 3 4 5', 'ŋ': '1 2 4 5',
//   };

//   const brailleRepresentationsDiphthongs = {
//     'eɪ': '1 5 2 4', 'əu': '5 1 3 6', 'aɪ': '1 2 4', 'ɔɪ': '1 3 2 4', 'æ': '1 1 3 6', 'ɪə': '2 4 5', 'eə': '1 5 5', 'ʊə': '1 3 6 5',
//   };

//   const keyToSymbolMapping = {
//     p: 'p', b: 'b', t: 't', d: 'd', k: 'k', g: 'g', T: 'tʃ', D: 'dʒ', f: 'f', v: 'v', s: 's', z: 'z', O:'θ', Q: 'ð', F:'ʃ', h: 'h', l: 'l', r: 'r', w: 'w', j: 'j', m: 'm', n: 'n', N: 'ŋ', i: 'ɪ', I: 'i', e: 'e', a: 'ɒ', A: 'ɑ', C: 'ɔ', 'u': 'ʊ', U: 'u', V: 'ʌ', Z: 'ʒ', E: 'ə', 1: 'eɪ', 2: 'əʊ', 3: 'aɪ', 4: 'ɔɪ', 5: 'æ', 6: 'ɪə', 7: 'eə', 8: 'ʊə',
//   };

//   const getDescription = (symbol) => {
//     if (descriptionsMonophthongs[symbol]) {
//       return descriptionsMonophthongs[symbol];
//     } else if (descriptionsConsonants[symbol]) {
//       return descriptionsConsonants[symbol];
//     } else if (descriptionsDiphthongs[symbol]) {
//       return descriptionsDiphthongs[symbol];
//     }
//     return 'Description not available';
//   };

//   const getExample = (symbol) => {
//     if (examplesMonophthongs[symbol]) {
//       return examplesMonophthongs[symbol];
//     } else if (examplesConsonants[symbol]) {
//       return examplesConsonants[symbol];
//     } else if (examplesDiphthongs[symbol]) {
//       return examplesDiphthongs[symbol];
//     }
//     return 'Example not available';
//   };

//   const getBrailleRepresentation = (symbol) => {
//     if (brailleRepresentationsMonophthongs[symbol]) {
//       return brailleRepresentationsMonophthongs[symbol];
//     } else if (brailleRepresentationsConsonants[symbol]) {
//       return brailleRepresentationsConsonants[symbol];
//     } else if (brailleRepresentationsDiphthongs[symbol]) {
//       return brailleRepresentationsDiphthongs[symbol];
//     }
//     return 'Braille representation not available';
//   };

//   const handleButtonClick = (symbol) => {
//     let symbolClicks = clicks[symbol] || 0;
//     symbolClicks = (symbolClicks + 1) % 4;

//     setClicks((prevClicks) => ({
//       ...prevClicks,
//       [symbol]: symbolClicks,
//     }));


//     let content = '';
    
//     switch (symbolClicks % 4) {
//       case 0:
//         setCurrentContent(getExample(symbol));
//         break;
//       case 1:
//         setCurrentContent(`Sounds: ${symbol}`);
//         break;
//       case 2:
//         setCurrentContent(getDescription(symbol));
//         break;
//       case 3:
//         setCurrentContent(getBrailleRepresentation(symbol));
//         break;
//       default:
//         setCurrentContent('Unknown content');
//     }

//     setCurrentSymbol(symbol);
//     setCurrentContent(content);
//     speakText(content); // Call the speakText function to read aloud the content
//   };

//   const speakText = (text) => {
//     if (window.speechSynthesis) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(utterance);
//     }
//   };



//   const handleKeyPress = (event) => {
//     const symbol = keyToSymbolMapping[event.key];
//     if (symbol) {
//       handleButtonClick(symbol);
//     }
//   };

  

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyPress);
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [clicks]);

//   return (
//     <div className="ipa-chart">
      
//       <h1> IPA Chart</h1>

//       <div>
//         <p>Sound: {currentSymbol}</p>
//         {currentSymbol && <SoundComponent symbol={currentSymbol} />}
//       </div>

//       <h2>CONSONANTS</h2>
//       {consonants.map((symbol, index) => (
//         <button key={index} onClick={() => handleButtonClick(symbol)} >
//           {symbol}
//         </button>
//       ))}

//       <h2>DIPHTHONGS</h2>
//       {diphthongs.map((symbol, index) => (
//         <button key={index} onClick={() => handleButtonClick(symbol)}>
//           {symbol}
//         </button>
//       ))}

//       <h2>MONOPHTHONGS</h2>
//       {monophthongs.map((symbol, index) => (
//         <button key={index} onClick={() => handleButtonClick(symbol)}className="symbol-button">
//           {symbol}
//         </button>
//       ))}
//       {currentContent && (
//         <div className="content">
//           <h2> {currentSymbol}</h2>
//           <p>{currentContent}</p>
          
//         </div>
        
//       )}
//       <button onClick={handleNavigate}>Go to Exercise</button>
//     </div>
//   );
// };

// export default IPAChart;









//  import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SoundComponent from './SoundComponent';
// import './IPAChart.css'

// const IPAChart = () => {
//   const [currentContent, setCurrentContent] = useState(null);
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [clicks, setClicks] = useState({});
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/exercise');
//   };

//   const monophthongs = ['/i:/', '/i/', '/e/', '/a/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
//   const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
//   const diphthongs = ['/ei/', '/əu/', '/ai/', '/ɔi/', '/ɑu/', '/iə/', '/eə/', '/uə/'];

//   const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

//   const examplesMonophthongs = {
//     '/i:/': 'meet', '/i/': 'hit', '/e/': 'bed', '/a/': 'cat', '/a:/': 'cart', '/ɔ:/': 'saw', '/ʊ/': 'put', '/u:/': 'boot', '/ʌ/': 'cut', '/ʒ:/': 'treasure', '/ə/': 'sofa',
//   };

//   const examplesConsonants = {
//     '/p/': 'pat', '/b/': 'bat', '/t/': 'tap', '/d/': 'dip', '/k/': 'kit', '/g/': 'gap', '/tʃ/': 'chin', '/dʒ/': 'gin', '/f/': 'fan', '/v/': 'van', '/s/': 'sip', '/z/': 'zip', '/θ/': 'thin', '/ð/': 'then', 'ʃ': 'ship', '/h/': 'hat', '/l/': 'lip', '/r/': 'rip', '/w/': 'win', '/j/': 'yes', '/m/': 'mat', '/n/': 'nap', '/ŋ/': 'sing',
//   };

//   const examplesDiphthongs = {
//     '/ei/': 'say', '/əu/': 'go', '/ai/': 'my', '/ɔi/': 'boy', '/ɑu/': 'how', '/iə/': 'near', '/eə/': 'hair', '/uə/': 'tour',
//   };

//   const descriptionsMonophthongs = {
//     '/i:/': 'Front close unrounded vowel', '/i/': 'Front close unrounded vowel', '/e/': 'Front mid unrounded vowel', '/a/': 'Front near-open unrounded vowel', '/a:/': 'Back open unrounded vowel', '/ɔ:/': 'Back open-mid rounded vowel', '/ʊ/': 'Back close rounded vowel', '/u:/': 'Back close rounded vowel', '/ʌ/': 'Back open-mid unrounded vowel', '/ʒ:/': 'Mid central unrounded vowel', '/ə/': 'Mid central unrounded vowel',
//   };

//   const descriptionsConsonants = {
//     '/p/': 'Voiceless bilabial plosive', '/b/': 'Voiced bilabial plosive', '/t/': 'Voiceless alveolar plosive', '/d/': 'Voiced alveolar plosive', '/k/': 'Voiceless velar plosive', '/g/': 'Voiced velar plosive', '/tʃ/': 'Voiceless postalveolar affricate', '/dʒ/': 'Voiced postalveolar affricate', '/f/': 'Voiceless labiodental fricative', '/v/': 'Voiced labiodental fricative', '/s/': 'Voiceless alveolar fricative', '/z/': 'Voiced alveolar fricative', '/θ/': 'Voiceless dental fricative', '/ð/': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', '/h/': 'Voiceless glottal fricative', '/l/': 'Alveolar lateral approximant', '/r/': 'Alveolar approximant', '/w/': 'Labio-velar approximant', '/j/': 'Palatal approximant', '/m/': 'Bilabial nasal', '/n/': 'Alveolar nasal', '/ŋ/': 'Velar nasal',
//   };

//   const descriptionsDiphthongs = {
//     '/ei/': 'Diphthong - closing (Front close unrounded vowel)', '/əu/': 'Diphthong - closing (Back close rounded vowel)', '/ai/': 'Diphthong - closing (Front close unrounded vowel)', '/ɔi/': 'Diphthong - closing (Front close unrounded vowel)', '/ɑu/': 'Diphthong - closing (Back close rounded vowel)', '/iə/': 'Diphthong - closing (Front close unrounded vowel)', '/eə/': 'Diphthong - closing (Front open-mid unrounded vowel)', '/uə/': 'Diphthong - closing (Back close rounded vowel)',
//   };

//   const brailleRepresentationsMonophthongs = {
//     '/i:/': '2 4', '/i/': '2 4', '/e/': '1 5', '/a/': '1', '/a:/': '1 1', '/ɔ:/': '1 3 1', '/ʊ/': '1 3 6', '/u:/': '1 3 6 2 4', '/ʌ/': '5 1', '/ʒ:/': '1 3 5 4', '/ə/': '5',
//   };

//   const brailleRepresentationsConsonants = {
//     '/p/': '1 2 3 4', '/b/': '1 2', '/t/': '2 3 4 5', '/d/': '1 4 5', '/k/': '1 3', '/g/': '1 2 4 5', '/tʃ/': '2 4 6', '/dʒ/': '1 4 5 6', '/f/': '1 2 4', '/v/': '1 2 3 6', '/s/': '3 4', '/z/': '1 3 5 6', '/θ/': '1 4 5 6', '/ð/': '1 4 5 6', 'ʃ': '1 4 6', '/h/': '1 2 5', '/l/': '1 2 3', '/r/': '1 2 3 5', '/w/': '2 4 5 6', '/j/': '2 4 5', '/m/': '1 3 4', '/n/': '1 3 4 5', '/ŋ/': '1 2 4 5',
//   };

//   const brailleRepresentationsDiphthongs = {
//     '/ei/': '1 5 2 4', '/əu/': '5 1 3 6', '/ai/': '1 2 4', '/ɔi/': '1 3 2 4', '/ɑu/': '1 1 3 6', '/iə/': '2 4 5', '/eə/': '1 5 5', '/uə/': '1 3 6 5',
//   };

//   const cycleContent = (symbol) => {
//     const newClicks = clicks[symbol] + 1;
//     setClicks({ ...clicks, [symbol]: newClicks });

//     if (allSymbols.includes(symbol)) {
//       setCurrentSymbol(symbol);

//       if (newClicks % 4 === 1) {
//         setCurrentContent(
//           <div>
//             <h3>Example:</h3>
//             <SoundComponent textToSpeak={examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]} />
//             <p>{examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]);
//       } else if (newClicks % 4 === 2) {
//         setCurrentContent(
//           <div>
//             <h3>Sound:</h3>
//             <SoundComponent textToSpeak={symbol} />
//             <p>{symbol}</p>
//           </div>
//         );
//         speakText(symbol);
//       } else if (newClicks % 4 === 3) {
//         setCurrentContent(
//           <div>
//             <h3>Description:</h3>
//             <SoundComponent textToSpeak={descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]} />
//             <p>{descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]);
//       } else {
//         setCurrentContent(
//           <div>
//             <h3>Braille Representation:</h3>
//             <SoundComponent textToSpeak={brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]} />
//             <p>{brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]);
//       }
      
//     }
//   };

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       const key = event.key;
//       const symbol = allSymbols.find((sym) => sym === key);
//       if (symbol) {
//         cycleContent(symbol);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [clicks]);

//   return (
//     <div className="ipa-chart" >
//       <h1>IPA Chart</h1>

//       <h2>CONSONANTS</h2>
//       {consonants.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)} >
//           {symbol}
//         </button>
//       ))}

//       <h2>DIPHTHONGS</h2>
//       {diphthongs.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)}>
//           {symbol}
//         </button>
//       ))}

//       <h2>MONOPHTHONGS</h2>
//       {monophthongs.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)}className="symbol-button">
//           {symbol}
//         </button>
//       ))}

//       {currentContent && (
//         <div className="content">
//           <h3>{currentSymbol}</h3>
//           {currentContent}
//         </div>
//       )}

// <button onClick={handleNavigate} style={{ margin: '20px', padding: '10px 20px', backgroundColor: 'green', cursor: 'pointer' }}>Exercise Page</button>
//     </div>
//   );
// };

// export default IPAChart;






// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SoundComponent from './SoundComponent';
// import './IPAChart.css'

// const IPAChart = () => {
//   const [currentContent, setCurrentContent] = useState(null);
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [clicks, setClicks] = useState({});
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/exercise');
//   };

//   const monophthongs = ['/i:/', '/i/', '/e/', '/a/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
//   const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
//   const diphthongs = ['/ei/', '/əu/', '/ai/', '/ɔi/', '/ɑu/', '/iə/', '/eə/', '/uə/'];

//   const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

//   const examplesMonophthongs = {
//     'i:': 'meet', 'i': 'hit', 'e': 'bed', 'ɒ': 'cat', 'a:': 'cart', 'ɔ:': 'saw', 'ʊ': 'put', 'u:': 'boot', 'ʌ': 'cut', 'ʒ:': 'treasure', 'ə': 'sofa',
//   };

//   const examplesConsonants = {
//     'p': 'pat', 'b': 'bat', 't': 'tap', 'd': 'dip', 'k': 'kit', 'g': 'gap', 'tʃ': 'chin', 'dʒ': 'gin', 'f': 'fan', 'v': 'van', 's': 'sip', 'z': 'zip', 'θ': 'thin', 'ð': 'then', 'ʃ': 'ship', 'h': 'hat', 'l': 'lip', 'r': 'rip', 'w': 'win', 'j': 'yes', 'm': 'mat', 'n': 'nap', 'ŋ': 'sing',
//   };

//   const examplesDiphthongs = {
//     'eɪ': 'say', 'əu': 'go', 'aɪ': 'my', 'ɔɪ': 'boy', 'æ': 'how', 'ɪə': 'near', 'eə': 'hair', 'ʊə': 'tour',
//   };
//   const descriptionsMonophthongs = {
//     'i:': 'Front close unrounded vowel', 'i': 'Front close unrounded vowel', 'e': 'Front mid unrounded vowel', 'ɒ': 'Front near-open unrounded vowel', 'a:': 'Back open unrounded vowel', 'ɔ:': 'Back open-mid rounded vowel', 'ʊ': 'Back close rounded vowel', 'u:': 'Back close rounded vowel', 'ʌ': 'Back open-mid unrounded vowel', 'ʒ:': 'Mid central unrounded vowel', 'ə': 'Mid central unrounded vowel',
//   };

//   const descriptionsConsonants = {
//     'p': 'Voiceless bilabial plosive', 'b': 'Voiced bilabial plosive', 't': 'Voiceless alveolar plosive', 'd': 'Voiced alveolar plosive', 'k': 'Voiceless velar plosive', 'g': 'Voiced velar plosive', 'tʃ': 'Voiceless postalveolar affricate', 'dʒ': 'Voiced postalveolar affricate', 'f': 'Voiceless labiodental fricative', 'v': 'Voiced labiodental fricative', 's': 'Voiceless alveolar fricative', 'z': 'Voiced alveolar fricative', 'θ': 'Voiceless dental fricative', 'ð': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', 'h': 'Voiceless glottal fricative', 'l': 'Alveolar lateral approximant', 'r': 'Alveolar approximant', 'w': 'Labio-velar approximant', 'j': 'Palatal approximant', 'm': 'Bilabial nasal', 'n': 'Alveolar nasal', 'ŋ': 'Velar nasal',
//   };

//   const descriptionsDiphthongs = {
//     'eɪ': 'Diphthong - closing (Front close unrounded vowel)', 'əu': 'Diphthong - closing (Back close rounded vowel)', 'aɪ': 'Diphthong - closing (Front close unrounded vowel)', 'ɔɪ': 'Diphthong - closing (Front close unrounded vowel)', 'æ': 'Diphthong - closing (Back close rounded vowel)', 'ɪə': 'Diphthong - closing (Front close unrounded vowel)', 'eə': 'Diphthong - closing (Front open-mid unrounded vowel)', 'ʊə': 'Diphthong - closing (Back close rounded vowel)',
//   };

//   const brailleRepresentationsMonophthongs = {
//     'i:': '2 4', 'i': '2 4', 'e': '1 5', 'ɒ': '1', 'a:': '1 1', 'ɔ:': '1 3 1', 'ʊ': '1 3 6', 'u:': '1 3 6 2 4', 'ʌ': '5 1', 'ʒ:': '1 3 5 4', 'ə': '5',
//   };

//   const brailleRepresentationsConsonants = {
//     'p': '1 2 3 4', 'b': '1 2', 't': '2 3 4 5', 'd': '1 4 5', 'k': '1 3', 'g': '1 2 4 5', 'tʃ': '2 4 6', 'dʒ': '1 4 5 6', 'f': '1 2 4', 'v': '1 2 3 6', 's': '3 4', 'z': '1 3 5 6', 'θ': '1 4 5 6', 'ð': '1 4 5 6', 'ʃ': '1 4 6', 'h': '1 2 5', 'l': '1 2 3', 'r': '1 2 3 5', 'w': '2 4 5 6', 'j': '2 4 5', 'm': '1 3 4', 'n': '1 3 4 5', 'ŋ': '1 2 4 5',
//   };

//   const brailleRepresentationsDiphthongs = {
//     'eɪ': '1 5 2 4', 'əu': '5 1 3 6', 'aɪ': '1 2 4', 'ɔɪ': '1 3 2 4', 'æ': '1 1 3 6', 'ɪə': '2 4 5', 'eə': '1 5 5', 'ʊə': '1 3 6 5',
//   };

//   const keyToSymbolMapping = {
//     p: 'p', b: 'b', t: 't', d: 'd', k: 'k', g: 'g', T: 'tʃ', D: 'dʒ', f: 'f', v: 'v', s: 's', z: 'z', O:'θ', Q: 'ð', F:'ʃ', h: 'h', l: 'l', r: 'r', w: 'w', j: 'j', m: 'm', n: 'n', N: 'ŋ', i: 'ɪ', I: 'i', e: 'e', a: 'ɒ', A: 'ɑ', C: 'ɔ', 'u': 'ʊ', U: 'u', V: 'ʌ', Z: 'ʒ', E: 'ə', 1: 'eɪ', 2: 'əʊ', 3: 'aɪ', 4: 'ɔɪ', 5: 'æ', 6: 'ɪə', 7: 'eə', 8: 'ʊə',
//   };

//   const getDescription = (symbol) => {
//     if (descriptionsMonophthongs[symbol]) {
//       return descriptionsMonophthongs[symbol];
//     } else if (descriptionsConsonants[symbol]) {
//       return descriptionsConsonants[symbol];
//     } else if (descriptionsDiphthongs[symbol]) {
//       return descriptionsDiphthongs[symbol];
//     }
//     return 'Description not available';
//   };

//   const getExample = (symbol) => {
//     if (examplesMonophthongs[symbol]) {
//       return examplesMonophthongs[symbol];
//     } else if (examplesConsonants[symbol]) {
//       return examplesConsonants[symbol];
//     } else if (examplesDiphthongs[symbol]) {
//       return examplesDiphthongs[symbol];
//     }
//     return 'Example not available';
//   };

//   const getBrailleRepresentation = (symbol) => {
//     if (brailleRepresentationsMonophthongs[symbol]) {
//       return brailleRepresentationsMonophthongs[symbol];
//     } else if (brailleRepresentationsConsonants[symbol]) {
//       return brailleRepresentationsConsonants[symbol];
//     } else if (brailleRepresentationsDiphthongs[symbol]) {
//       return brailleRepresentationsDiphthongs[symbol];
//     }
//     return 'Braille representation not available';
//   };

//   const handleButtonClick = (symbol) => {
//     let symbolClicks = clicks[symbol] || 0;
//     symbolClicks = (symbolClicks + 1) % 4;
  
//     setClicks((prevClicks) => ({
//       ...prevClicks,
//       [symbol]: symbolClicks,
//     }));
  
//     let content = '';
//     let shouldSpeak = false;
  
//     switch (symbolClicks) {
//       case 0:
//         content = getExample(symbol);
//         shouldSpeak = true;  // Enable speaking for example
//         break;
//       case 1:
//         content = `Sounds: ${symbol}`;
//         shouldSpeak = false; // Disable speaking for sound
//         break;
//       case 2:
//         content = getDescription(symbol);
//         shouldSpeak = true;  // Enable speaking for description
//         break;
//       case 3:
//         content = getBrailleRepresentation(symbol);
//         shouldSpeak = true;  // Enable speaking for Braille representation
//         break;
//       default:
//         content = 'Unknown content';
//         shouldSpeak = false;
//     }
  
//     setCurrentSymbol(symbol);
//     setCurrentContent(content);
  
//     if (shouldSpeak) {
//       speakText(content);
//     }
//   };
  
//   const speakText = (text) => {
//     if (window.speechSynthesis) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(utterance);
//     }
//   };
  
  

//   const handleKeyPress = (event) => {
//     const symbol = keyToSymbolMapping[event.key];
//     if (symbol) {
//       handleButtonClick(symbol);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyPress);
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [clicks]);

//   return (
//     <div className="ipa-chart">
//       <h1> IPA Chart</h1>


//       <h2>CONSONANTS</h2>
//       {consonants.map((symbol, index) => (
//         <button key={index} onClick={() =>handleButtonClick(symbol)} >
//           {symbol}
//         </button>
//       ))}

//       <h2>DIPHTHONGS</h2>
//       {diphthongs.map((symbol, index) => (
//         <button key={index} onClick={() => handleButtonClick(symbol)}>
//           {symbol}
//         </button>
//       ))}

//       <h2>MONOPHTHONGS</h2>
//       {monophthongs.map((symbol, index) => (
//         <button key={index} onClick={() => handleButtonClick(symbol)}className="symbol-button">
//           {symbol}
//         </button>
//       ))}
//       {currentContent && (
//         <div className="content">
//           <h2> {currentSymbol}</h2>
//           <p>{currentContent}</p>
          
//         </div>
//       )}
// <div>
//         <p>Sound: {currentSymbol}</p>
//         {currentSymbol && <SoundComponent symbol={currentSymbol} />}
//       </div>

    
//       <button onClick={handleNavigate}>Go to Exercise</button>
//     </div>
//   );
// };

// export default IPAChart;









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

  const monophthongs = ['/i:/', '/i/', '/e/', '/a/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
  const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
  const diphthongs = ['/ei/', '/əu/', '/ai/', '/ɔi/', '/ɑu/', '/iə/', '/eə/', '/uə/'];

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
    let shouldSpeak = false;
  
    switch (symbolClicks) {
      case 0 : 'example'
        content = getExample(symbol);
        shouldSpeak = true;  // Enable speaking for example
        break;
      case 1:
        content = `Sounds: ${symbol}`;
        shouldSpeak = false; // Disable speaking for sound
        break;
      case 2:
        content = getDescription(symbol);
        shouldSpeak = true;  // Enable speaking for description
        break;
      case 3:
        content = getBrailleRepresentation(symbol);
        shouldSpeak = true;  // Enable speaking for Braille representation
        break;
      default:
        content = 'Unknown content';
        shouldSpeak = false;
    }
  
    console.log('Symbol:', symbol);
    console.log('Content:', content); // Debug content
    console.log('Should Speak:', shouldSpeak); // Debug if speaking is enabled
  
    setCurrentSymbol(symbol);
    setCurrentContent(content);
  
    if (shouldSpeak) {
      speakText(content);
    }
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


      <h2>CONSONANTS</h2>
      {consonants.map((symbol, index) => (
        <button key={index} onClick={() =>handleButtonClick(symbol)} >
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
<div>
        <p>Sound: {currentSymbol}</p>
        {allSymbols && currentSymbol && <SoundComponent symbol={currentSymbol} />}
      </div>

    
      <button onClick={handleNavigate}>Go to Exercise</button>
    </div>
  );
};

export default IPAChart;