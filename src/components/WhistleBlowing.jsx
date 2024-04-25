import React from 'react';
import './styles.css';

function WhistleBlowing() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-sand" style={{  height: '445px' }}>
         <div className="max-w-lg mx-auto p-6 relative w-full h-full">

         <div className="max-w-lg mx-auto p-6 relative w-full h-full">
  <button
    className="relative overflow-hidden bg-black rounded-full py-8 px-16 text-white font-bold hover:bg-dark-blue hover:border dark-blue transition duration-300"
    style={{ width: '500px', height: '136px' }}
  >
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="WhistleBlowing text-white text-4xl font-['Apple SD Gothic Neo']">Whistle blowing</div>
      <img src="public\vector\whistleIcon.svg" alt="Whistle" className="w-10 h-10" />
    </div>
  </button>
</div>
  
</div>

      </div>

  
  );
}

export default WhistleBlowing;
