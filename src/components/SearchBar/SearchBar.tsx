import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import './SearchBar.scss';

export const SearchBar = () => {
  const [text, setText] = useState<string>('')
  
  const navigate = useNavigate()

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const enterPressEvent = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
      />
      <Link to={`search/${text}`}>
        <button />
      </Link>
    </div>
  );
}

