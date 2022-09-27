import React, { useState } from 'react';
import './SearchBar.scss';

export const SearchBar = () => {
  const [text, setText] = useState<string>('')

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const enterPressEvent = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('enter click', text)
      setText('')
    }
  }

  const buttonClickHandle = () => {
    console.log('button click', text)
  }

  return (
    <div className="searchBar">
      <input
        value={text}
        onChange={handleChangeText}
        onKeyPress={enterPressEvent}
        placeholder="Search"
      />
      <button onClick={buttonClickHandle}></button>
    </div>
  );
}

