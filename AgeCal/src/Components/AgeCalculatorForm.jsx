import React, { useState } from 'react';

const AgeCalculatorForm = ({ CalculateAge }) => {
  const [birthdate, setBirthdate] = useState('');

  const handleFromSubmit = (e) => {
    e.preventDefault();
    CalculateAge(birthdate);
  };

  return (
    <form onSubmit={handleFromSubmit} className="flex flex-col items-center">
      {/* Input */}
      <input
        className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-400 my-3  h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12"
        value={birthdate}
        type="date"
        onChange={(e) => {
          setBirthdate(e.target.value);
        }}
      />
      {/* Button */}
      
      <button
      disabled={!birthdate}
  className="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
CALCULAT!
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >RESULT!</span
  >
  </button>


    </form>
  );
};

export default AgeCalculatorForm;
