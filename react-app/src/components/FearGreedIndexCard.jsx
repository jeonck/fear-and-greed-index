import React from 'react';

const FearGreedIndexCard = ({ indexValue, sentiment }) => {
  let bgColorClass = '';
  let textColorClass = '';

  if (sentiment === 'Extreme Fear') {
    bgColorClass = 'bg-red-600';
    textColorClass = 'text-white';
  } else if (sentiment === 'Fear') {
    bgColorClass = 'bg-orange-500';
    textColorClass = 'text-white';
  } else if (sentiment === 'Neutral') {
    bgColorClass = 'bg-gray-500';
    textColorClass = 'text-white';
  } else if (sentiment === 'Greed') {
    bgColorClass = 'bg-green-500';
    textColorClass = 'text-white';
  } else if (sentiment === 'Extreme Greed') {
    bgColorClass = 'bg-green-700';
    textColorClass = 'text-white';
  }

  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColorClass} ${textColorClass} text-center`}>
      <h2 className="text-2xl font-semibold mb-2">Fear & Greed Index</h2>
      <p className="text-5xl font-bold mb-4">{indexValue}</p>
      <p className="text-xl">{sentiment}</p>
    </div>
  );
};

export default FearGreedIndexCard;