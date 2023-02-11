import axios from 'axios';

const TranslateByDeep = (searchText, targetLanguage, setOutputText) => {
  //const axios = require('axios');

  if (searchText === '') return;

  targetLanguage = targetLanguage.toLowerCase();

  const input =
    '{"q": "' + searchText + '" ,"target": "' + targetLanguage + '"}';

  const options = {
    method: 'POST',
    url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1ef16d7cf7mshf61ab9eaa5f1441p1dab5fjsn06bab7d0cb34',
      'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
    },
    data: input,
  };

  axios
    .request(options)
    .then(function (response) {
      setOutputText(response.data.data.translations.translatedText);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default TranslateByDeep;
