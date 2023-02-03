import React, { createContext, useState } from 'react';
import { apiKey } from '../api/config';
export const PhotoContext = createContext();

function translate(apiKey, text, language) {
  const params = new URLSearchParams({
    auth_key: apiKey,
    //source_lang: languages.source,
    target_lang: language,
    text: text,
  });

  return fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((r) => r.json())
    .then((response) => {
      var te = response.translations[0].text;
      // var te = response.translations.map((translation) => translation.text); //.join(' ');
      console.log(te);
    })
    .catch((error) => {
      console.error(error);
      return 'Could not translate';
    });
}

const PhotoContextProvider = (props) => {
  const [test, setText] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    translate('04d72a78-ed6f-5c12-e002-5d4e67a4a8b7:fx', 'Hello World', 'JA');
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
