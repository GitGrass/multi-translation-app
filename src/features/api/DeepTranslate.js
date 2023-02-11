import axios from 'axios';
import { deepLTranslate_apiKey } from './config';
const TranslateByDeepTranslate = (
  searchText,
  targetLanguage,
  setOutputText
) => {
  if (searchText === '') return;

  const options = {
    method: 'POST',
    url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': deepLTranslate_apiKey,
      'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
    },
    data: {
      q: searchText,
      target: targetLanguage,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const translatedText = response.data.data.translations.translatedText;
      setOutputText(translatedText);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default TranslateByDeepTranslate;
