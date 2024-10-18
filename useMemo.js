import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    const largeArray = Array.from({ length: 100000 }, (_, index) => index).reverse();
    return largeArray.sort();
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Text: {text}</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <h2>Result of Expensive Calculation</h2>
      <p>First 10 elements: {expensiveCalculation.slice(0, 10).join(', ')}</p>
    </div>
  );
};

export default UseMemoExample;