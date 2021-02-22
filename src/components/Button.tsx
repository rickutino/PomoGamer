import React, { useState } from 'react';
interface ButtonProps {
  color: string;
  children: string;
}


export function Button(props:ButtonProps) {
  const [ count, setCount ] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  return (
    <button 
      type="button" 
      style={{ backgroundColor: props.color }}
      onClick={increment}
    >
      {props.children}  {count}
    </button>
  );
}