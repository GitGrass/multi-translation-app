import axios from 'axios';

const TranslateByGoogle = (searchText, targetLanguage, setOutputText) => {
  //const axios = require('axios');

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
      'X-RapidAPI-Key': '1ef16d7cf7mshf61ab9eaa5f1441p1dab5fjsn06bab7d0cb34',
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
    });
};

export default TranslateByGoogle;
