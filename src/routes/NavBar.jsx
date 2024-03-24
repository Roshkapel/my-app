import React from 'react';
import MenuBar from './Search/MenuBar';
import { SearchBar } from './Search';

const NavBar = ({setResults, users, addDataHandler, removeDataHandler}) => {
  return (
    <div className="navBar">
    <SearchBar 
      setResults={setResults}
      users={users}
      addDataHandler={addDataHandler}
      removeDataHandler={removeDataHandler}
  /> 
  <MenuBar/>
</div>
  )
};

export default NavBar;