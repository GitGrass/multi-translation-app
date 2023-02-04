import React, { useContext, useEffect } from 'react';
import { InputContext } from '../context/InputContext';
import { DeeplTransrationContext } from '../context/DeeplTransrationContext';
import { Form, TextArea } from 'semantic-ui-react';
// import Container from "./Container";

const Result = (props) => {
  const {searchText, targetLanguage} = useContext(
    InputContext
);
  const { outputText, loading, translate } = useContext(
    DeeplTransrationContext
  );
  useEffect(() => {
    translate(searchText, targetLanguage);
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
