import React from 'react';

const AgeResults = ({ age }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
      <h1 className="text-xl font-semibold mb-4">Age Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Years</h2>
          <p className="text-gray-700">{age.Years}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Months</h2>
          <p className="text-gray-700">{age.Months}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Days</h2>
          <p className="text-gray-700">{age.Days}</p>
        </div>
      </div>
    </div>
  );
};

export default AgeResults;
