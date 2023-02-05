import React, { useContext, useState } from 'react';
import { InputContext } from '../context/InputContext';
import { Form, Button, Segment, Dropdown } from 'semantic-ui-react';

const Input = () => {
  const { searchText, targetLanguage, setSearchText, setTargetLanguage } =
    useContext(InputContext);

  const [internalSearchText, setInternalSearchText] = useState('');
  const [internalTargetLanguage, setInternalTargetLanguage] = useState('EN');

  const languageOptions = [
    { key: 'EN', value: 'EN', text: 'English' },
    { key: 'JA', value: 'JA', text: 'Japanese' },
  ];

  //console.log(languageOptions[0].value)

  const handleSubmit = (e, internalSearchText, internalTargetLanguage) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSearchText(internalSearchText);
    setTargetLanguage(internalTargetLanguage);
  };
  return (
    <div className="App-sub-title">
      <h2>Original text</h2>
      <p className="App-text">
        &#9656; Please select the language you wish to translate
      </p>
      <Form
        className="App-input-form"
        onSubmit={(e) =>
          handleSubmit(e, internalSearchText, internalTargetLanguage)
        }
      >
        <Segment stacked>
          <Dropdown
            //palceholder='select language'
            options={languageOptions}
            selection
            fluid
            value={internalTargetLanguage}
            onChange={(e, data) => {
              setInternalTargetLanguage(data.value);
            }}
          />
          <Form.TextArea
            type="text"
            value={internalSearchText}
            onChange={(e) => {
              setInternalSearchText(e.target.value);
            }}
          />
          <Button
            color="teal"
            fluidsize="large"
            type="submit"
            className={`search-button ${
              internalSearchText.trim() ? 'active' : null
            }`}
            disabled={!internalSearchText.trim()}
          >
            Translate
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default Input;
