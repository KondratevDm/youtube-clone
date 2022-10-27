import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './SearchBar.scss';

export const SearchBar = () => {
  const [text, setText] = useState<string>('')
  const [isHiddenInputShow, setIsHiddenInputShow] = useState<boolean>(false)


  const navigate = useNavigate()

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const enterPressEvent = (e: React.KeyboardEvent) => {

    if (e.key === 'Enter' && text.length) {
      navigate(`search/${text}`)
    }
  }

  const hiddenInputShow = () => {
    setIsHiddenInputShow(!isHiddenInputShow)

    if (text.length) {
      navigate(`search/${text}`)
    }
  }


  return (
    <div className="searchBar">
      <input
        value={text}
        onChange={handleChangeText}
        onKeyPress={enterPressEvent}
        placeholder="Search"
        className="searchBar__default-input"
      />
      <input
        value={text}
        onChange={handleChangeText}
        onKeyPress={enterPressEvent}
        placeholder="Search"
        className={`searchBar__hidden-input ${isHiddenInputShow ? 'searchBar__hidden-input__show' : ''}`}
      />
      <button onClick={hiddenInputShow} />
    </div>
  );
}

