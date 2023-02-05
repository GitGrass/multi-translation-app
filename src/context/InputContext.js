import React, { createContext, useState } from 'react';
export const InputContext = createContext();
// import { apiKey } from '../api/config';

const InputContextProvider = (props) => {
  const [searchText, setSearchText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('EN');

  return (
    <InputContext.Provider
      value={{ searchText, targetLanguage, setSearchText, setTargetLanguage }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
