import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'

const NameQ = ({ counter, setCounter, name, setName }) => {
  return (
    <div className="textboxChild">
      <p>What is your name?</p>
      <input
        type="text"
        placeholder="Your name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default NameQ;