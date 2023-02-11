import axios from 'axios';
import { google_apiKey } from './config';

const TranslateByGoogle = (searchText, targetLanguage, setOutputText) => {
  if (searchText === '') return;

  targetLanguage = targetLanguage.toLowerCase();
  const encodedParams = new URLSearchParams();
  encodedParams.append('q', searchText);
  encodedParams.append('target', targetLanguage);

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': google_apiKey,
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then((response) => {
      const translatedText = response.data.data.translations[0].translatedText;
      setOutputText(translatedText);
    })
    .catch(function (error) {
      console.error(error);
      setOutputText(
        '- This translation API cannot be used because it has exceeded the monthly translation usage limit. -'
      );
    });
};

export default TranslateByGoogle;
