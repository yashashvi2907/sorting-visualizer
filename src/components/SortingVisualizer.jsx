import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/bubblesort'; 
import { selectionSort } from '../algorithms/selectionsort';
import { insertionSort } from '../algorithms/insertionsort';

// Import bubbleSort
import '../styles/SortingVisualizer.css';  

// Import styles

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false); 
  const [selectedAlgo, setSelectedAlgo] = useState('bubbleSort');

// Track sorting state
// Function to generate a random array

const generateArray = () => {
  const newArr = Array.from({ length: 10 }, () => ({
    value: Math.floor(Math.random() * 400) + 100,
    color: 'turquoise',
  }));
  setArray(newArr);
};
const [speed, setSpeed] = useState(50); // default speed (ms)



  // Generate array when component mounts
  useEffect(() => {
    generateArray();
  }, []);
  const startSorting = () => {
    setIsSorting(true);
  
    const delay = speed;
  
    let sortPromise;
  
    switch (selectedAlgo) {
      case 'bubbleSort':
        sortPromise = bubbleSort(array, setArray, delay);
        break;
      case 'selectionSort':
        sortPromise = selectionSort(array, setArray, delay);
        break;
      case 'insertionSort':
        sortPromise = insertionSort(array, setArray, delay);
        break;
      default:
        sortPromise = Promise.resolve();
    }
  
    sortPromise.then(() => {
      setIsSorting(false);
    });
  };

  return (
    <div className="visualizer-wrapper">
      <div className="visualizer-heading">
        <h1>Sorting Visualizer</h1>
      </div>
  
      <div className="visualizer-main">
        {/* Bars Section */}
        <div className="visualizer-box bars-box">
          <h2>Sorting Bars</h2>
          <div className="bar-container">
          {array.map((item, idx) => (
  <div
    key={idx}
    className="array-bar"
    style={{
      width: `${item.value}px`,
      backgroundColor: item.color,
    }}
  ></div>
))}
          </div>
        </div>
  
        {/* Controls Section */}
        <div className="visualizer-box controls-box">
          <h2>Controls</h2>
  
          <label htmlFor="algo-select">Choose Algorithm:</label>
          <select
            id="algo-select"
            value={selectedAlgo}
            onChange={(e) => setSelectedAlgo(e.target.value)}
            disabled={isSorting}
          >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
          </select>
          <label htmlFor="speed-range">Speed: {speed} ms</label>
  <input
    type="range"
    id="speed-range"
    min="10"
    max="200"
    step="10"
    value={speed}
    onChange={(e) => setSpeed(Number(e.target.value))}
    disabled={isSorting}
  />

  
          <button
            className="start-btn"
            onClick={startSorting}
            disabled={isSorting}
          >
            Start Sorting
          </button>
  
          <button
            className="generate-btn"
            onClick={generateArray}
            disabled={isSorting}
          >
            Generate New Array
          </button>
        </div>
      </div>
    </div>
  );  
}
export default SortingVisualizer;