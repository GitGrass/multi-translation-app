import React, { createContext, useState } from 'react';
export const InputContext = createContext();
// import { apiKey } from '../api/config';

const InputContextProvider = (props) => {
  const [searchText, setSearchText] = useState('');
  const [targetLanguage, setTergetLanguage] = useState('EN');

  return (
    <InputContext.Provider
      value={{ searchText, targetLanguage, setSearchText, setTergetLanguage }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
