import React, { useContext, useEffect, useState } from 'react';
import { InputContext } from '../context/InputContext';
import { Form, TextArea } from 'semantic-ui-react';
import ShareButton from './ShareButton';

const Result = (props) => {
  const { searchText, targetLanguage } = useContext(InputContext);
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    props.function(searchText, targetLanguage, setOutputText);
  }, [props, searchText, targetLanguage]);

  return (
    <div>
      <Form>
        <Form.Field
          control={TextArea}
          placeholder="Your Result Translation.."
          value={outputText}
        />
      </Form>
      <ShareButton />
    </div>
  );
};

export default Result;
