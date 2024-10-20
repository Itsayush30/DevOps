import React from 'react';

function ChildComponent({ name }) {
  console.log('ChildComponent rendered');
  return <div>Hello, {name}!</div>;
}

export default React.memo(ChildComponent);