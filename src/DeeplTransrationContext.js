import React, { createContext, useState } from 'react';
export const DeeplTransrationContext = createContext();
// import { apiKey } from '../api/config';

const DeeplTransrationContextProvider = (props) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const translate = (
    apiKey = '04d72a78-ed6f-5c12-e002-5d4e67a4a8b7:fx',
    language = 'JA',
    text = 'Hello World'
  ) => {
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
        const translatedText = response.translations[0].text;
        // const translatedText = response.translations.map((translation) => translation.text); //.join(' ');
        console.log(translatedText);
        setText(translatedText);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        return 'Could not translate';
      });
  };
  return (
    <DeeplTransrationContext.Provider value={{ text, loading, runSearch }}>
      {props.children}
    </DeeplTransrationContext.Provider>
  );
};

export default PhotoContextProvider;
