import React, {useContext, useState} from "react";
import { InputContext } from '../context/InputContext';
import { Form, Button, Segment, Dropdown } from "semantic-ui-react";

const Input = () =>{
    const {searchText, setSearchText, targetLanguage, setTergetLanguage} = useContext(
        InputContext
    );

    const [internalSearchText, setInternalSearchText] = useState('')
    const [internalTargetLanguage, setInternalTargetLanguage] = useState('')

    const languageOptions = [
        {key: 'EN', value: 'EN', text: 'English'},
        {key: 'JA', value: 'JA', text: 'Japanese'},
    ]

    //console.log(languageOptions[0].value)

    const handleSubmit = (e, internalSearchText, internalTargetLanguage) =>{
        e.preventDefault();
        e.currentTarget.reset();
        setSearchText(internalSearchText)
        setTergetLanguage(internalTargetLanguage)
    }
    return (
        <div>
            <h2>Original text</h2>
            <Form onSubmit={(e) => handleSubmit(e, internalSearchText, internalTargetLanguage)}>
                <Segment stacked>
                    <Dropdown 
                        //palceholder='select language' 
                        options={languageOptions} 
                        selection
                        fluid
                        value={internalTargetLanguage} 
                        onChange={((e, data)=>{console.log(data.value); setInternalTargetLanguage(data.value);})}
                    />
                    <Form.TextArea
                        type='text'
                        value={internalSearchText}
                        onChange={(e)=>{setInternalSearchText(e.target.value)}}
                    />
                    <Button  
                        color="teal"
                        fluidsize='large'       
                        type="submit"
                        className={`search-button ${internalSearchText.trim() ? "active" : null}`}
                        disabled={!internalSearchText.trim()}
                    >
                        Translate
                    </Button>
                </Segment>
            </Form>
        </div>
    )
}

export default Input