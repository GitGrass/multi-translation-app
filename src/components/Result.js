import React, { useContext, useEffect, useState } from 'react';
import { DeeplTransrationContext } from '../context/DeeplTransrationContext';
import { Form, TextArea } from 'semantic-ui-react';
// import Container from "./Container";

const Result = (props) => {
  // const { outputText, loading, translate } = useContext(
  //   DeeplTransrationContext
  // );
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    const text = props.function(
      props.searchText,
      props.targetLanguage,
      setOutputText
    );
  }, [props]);

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
