import React from "react";
import { Form, TextArea } from "semantic-ui-react";
// import Container from "./Container";

const Result = ({ output }) => {
  return (
    <>
      <h2>Translation Result</h2>
      <Form>
        <Form.Field
          control={TextArea}
          placeholder="Your Result Translation.."
          value={output}
        />
      </Form>
    </>
  );
};

export default Result;
