import FearGreedIndexCard from './components/FearGreedIndexCard';

function App() {
  const indexValue = 58; // Current market sentiment: Greed, with a value of 58.
  const sentiment = 'Greed';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Fear and Greed Index Board</h1>
      <FearGreedIndexCard indexValue={indexValue} sentiment={sentiment} />
    </div>
  );
}

export default App;