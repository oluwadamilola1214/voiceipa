import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import IPAChart from './Components/IPAChart';
import Exercise from './Exercise/Exercise';
import Results from './ressults/Results';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ipa-chart" element={<IPAChart />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
