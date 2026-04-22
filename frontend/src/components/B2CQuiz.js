import React, { useState } from 'react';
import '../App.css';

const B2C_QUESTIONS = [
  {
    id: 1,
    question: 'Wie ist Ihr Dach ausgerichtet?',
    options: ['Süd', 'Ost-West', 'Nord', 'Weiß nicht']
  },
  {
    id: 2,
    question: 'Wie viele Personen leben in Ihrem Haushalt?',
    options: ['1 Person', '2-3 Personen', '4-5 Personen', '6+ Personen']
  },
  {
    id: 3,
    question: 'Wie hoch sind Ihre jährlichen Stromkosten?',
    options: ['< 500€', '500-1000€', '1000-2000€', '> 2000€']
  },
  {
    id: 4,
    question: 'Besitzen Sie ein Elektroauto oder planen Sie eines?',
    options: ['Ja, bereits vorhanden', 'Ja, geplant', 'Nein', 'Weiß nicht']
  },
  {
    id: 5,
    question: 'Welche ist Ihre Postleitzahl (erste 2 Ziffern)?',
    options: ['01-19', '20-29', '30-49', '50-99']
  },
  {
    id: 6,
    question: 'Können Sie Speichersysteme (Batterie) installieren?',
    options: ['Ja, gerne', 'Vielleicht', 'Nein', 'Weiß nicht']
  },
  {
    id: 7,
    question: 'Wie wichtig ist Ihnen Energieunabhängigkeit?',
    options: ['Sehr wichtig', 'Wichtig', 'Eher unwichtig', 'Nicht wichtig']
  }
];

function B2CQuiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [B2C_QUESTIONS[currentQuestion].id]: answer
    };
    setAnswers(newAnswers);

    if (currentQuestion < B2C_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmit = () => {
    const leadData = {
      segment: 'b2c',
      answers,
      email,
      phone,
      timestamp: new Date().toISOString()
    };
    onComplete(leadData);
    alert('Danke! Ihre Daten wurden gespeichert.');
  };

  const progress = ((currentQuestion + 1) / B2C_QUESTIONS.length) * 100;

  if (showResult) {
    return (
      <div className="container quiz-container">
        <h1>🎉 Ergebnis wird berechnet...</h1>
        <p>Geben Sie Ihre Daten an, um die <strong>individuelle Wirtschaftlichkeitsanalyse</strong> und verfügbare <strong>Fördergelder</strong> zu erhalten.</p>
        
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <input
            type="email"
            placeholder="Ihre E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
            required
          />
          <input
            type="tel"
            placeholder="Ihre Telefonnummer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #ddd' }}
            required
          />
          <button 
            className="button button-primary" 
            onClick={handleSubmit}
            style={{ width: '100%' }}
          >
            Analyse erhalten
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container quiz-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      
      <p style={{ fontSize: '12px', color: '#999' }}>Frage {currentQuestion + 1} von {B2C_QUESTIONS.length}</p>
      <h2 className="question-text">{B2C_QUESTIONS[currentQuestion].question}</h2>
      
      <div>
        {B2C_QUESTIONS[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default B2CQuiz;