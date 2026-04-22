import React, { useState } from 'react';
import SegmentationScreen from './components/SegmentationScreen';
import B2CQuiz from './components/B2CQuiz';
import B2BQuiz from './components/B2BQuiz';
import './App.css';

function App() {
  const [stage, setStage] = useState('segmentation'); // segmentation, b2c, b2b
  const [userData, setUserData] = useState({});

  const handleSegmentation = (type) => {
    setStage(type === 'b2c' ? 'b2c' : 'b2b');
    setUserData({ segment: type });
  };

  const handleQuizComplete = (data) => {
    const completeData = { ...userData, ...data };
    setUserData(completeData);
    console.log('Lead Data:', completeData);
    // TODO: Send to backend API here
    // fetch('/api/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(completeData)
    // });
  };

  return (
    <div className="App">
      {stage === 'segmentation' && <SegmentationScreen onSelect={handleSegmentation} />}
      {stage === 'b2c' && <B2CQuiz onComplete={handleQuizComplete} />}
      {stage === 'b2b' && <B2BQuiz onComplete={handleQuizComplete} />}
    </div>
  );
}

export default App;