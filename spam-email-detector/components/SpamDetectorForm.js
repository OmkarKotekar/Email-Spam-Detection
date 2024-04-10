import React, { useState } from 'react';

function SpamDetectorForm() {
  const [emailText, setEmailText] = useState('');
  const [prediction, setPrediction] = useState(2);

  const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailText })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch prediction.');
      }
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  return (
    <div className='pt-10'>
      <textarea className='border border-black' placeholder='Enter Email...' rows={20} cols={60} value={emailText} onChange={(e) => setEmailText(e.target.value)} />
      <br/>
      <button className='border border-black bg-yellow-600 p-2 rounded-lg' onClick={handlePredict}>Check</button>
      {prediction==1 && <div className='text-xl'>Result: Spam</div>}
      {prediction==0 && <div className='text-xl'>Result: Ham</div>}
      {prediction==2 && <div className='text-xl'>Result: </div>}
    </div>
  );
}

export default SpamDetectorForm;
