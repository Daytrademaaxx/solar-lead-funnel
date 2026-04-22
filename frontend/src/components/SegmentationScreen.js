import React from 'react';
import '../App.css';

function SegmentationScreen({ onSelect }) {
  return (
    <div className="container">
      <h1>🌞 Solar-Check 2026</h1>
      <p>Möchten Sie Stromkosten für Ihr <strong>Eigenheim</strong> oder für Ihren <strong>Betrieb</strong> sparen?</p>
      <div className="button-group">
        <button 
          className="button button-primary" 
          onClick={() => onSelect('b2c')}
        >
          🏠 Für mein Eigenheim
        </button>
        <button 
          className="button button-secondary" 
          onClick={() => onSelect('b2b')}
        >
          🏭 Für meinen Betrieb
        </button>
      </div>
    </div>
  );
}

export default SegmentationScreen;