import React, { useContext, useEffect, useState } from 'react';
import { InputContext } from '../context/InputContext';
import { Form, TextArea } from 'semantic-ui-react';

const Result = (props) => {
  const { searchText, targetLanguage } = useContext(InputContext);
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    props.function(searchText, targetLanguage, setOutputText);
  }, [searchText]);

  return (
    <div>
      <h2>Translation Result</h2>
      <Form>
        <Form.Field
          control={TextArea}
          placeholder="Your Result Translation.."
          value={outputText}
        />
      </Form>
    </div>
  );
};

export default Result;
