import './App.css';

import React, {useRef} from 'react';

export default function App() {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>bobbyhadz.com</h2>

      <Input innerRef={inputRef} />
    </div>
  );
}

const Input = ({innerRef}) => {
  const logInputValue = () => {
    console.log(innerRef.current.value);
  };
  return (
    <div>
      <input id="message" name="message" ref={innerRef} />

      <button onClick={logInputValue}>Log value</button>
    </div>
  );
};
