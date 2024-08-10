const speakText = (text) => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking');
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = () => {
      console.log('SpeechSynthesisUtterance.onend');
    };
    utterThis.onerror = (event) => {
      console.error('SpeechSynthesisUtterance.onerror', event);
    };
    synth.speak(utterThis);
  };
  
  export default speakText