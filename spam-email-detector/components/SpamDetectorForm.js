import React, { useState } from 'react';

function SpamDetectorForm() {
  const [emailText, setEmailText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    setIsLoading(true);
    setError(null);
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
      setPrediction(data.result);
    } catch (error) {
      console.error('Prediction error:', error);
      setError('Failed to fetch prediction. Please try again.');
    }
    setIsLoading(false);
  };

  const handleClear = () => {
    setEmailText('');
    setPrediction(null);
    setError(null);
  };

  return (
    <div className='max-w-3xl mx-auto py-10'>
      <textarea
        className='w-96 h-72 border-4 border-black rounded-lg shadow-lg p-4 focus:outline-none focus:border-black'
        placeholder='Enter Email...'
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <div className='flex justify-center mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 transition-colors duration-300'
          onClick={handlePredict}
          disabled={isLoading || !emailText.trim()}
        >
          {isLoading ? 'Checking...' : 'Check Spam'}
        </button>
        <button
          className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className='mt-6 text-center'>
        {error && <div className='text-red-600 text-xl'>{error}</div>}
        {prediction && <div className='text-xl'>{`Result: ${prediction}`}</div>}
      </div>
    </div>
  );
}

export default SpamDetectorForm;
