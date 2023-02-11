import { deepL_apiKey } from './config';

const TranslateByDeepl = (searchText, targetLanguage, setOutputText) => {
  const params = new URLSearchParams({
    auth_key: deepL_apiKey,
    target_lang: targetLanguage,
    text: searchText,
  });

  if (searchText === '') return;

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
      setOutputText(translatedText);
    })
    .catch((error) => {
      console.error(error);
      return 'Could not translate';
    });
};

export default TranslateByDeepl;
