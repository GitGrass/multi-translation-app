import React, {useState} from "react";
import { Form, Button, Segment, Dropdown } from "semantic-ui-react";

const Input = () =>{
    const [searchText, setSearchText] = useState('')
    const [targetLanguage, setTergetLanguage] = useState('EN')

    const languageOptions = [
        {key: 'EN', value: 'EN', text: 'English'},
        {key: 'JA', value: 'JA', text: 'Japanese'},
    ]

    //console.log(languageOptions[0].value)

    const handleSubmit = (e, searchText, targetLanguage) =>{
        e.preventDefault();
        e.currentTarget.reset();
        console.log(searchText)
        console.log(targetLanguage)
    }
    return (
        <div>
            <h2>Original text</h2>
            <Form onSubmit={(e) => handleSubmit(e, searchText, targetLanguage)}>
                <Segment stacked>
                    <Dropdown 
                        //palceholder='select language' 
                        options={languageOptions} 
                        selection
                        fluid
                        value={targetLanguage} 
                        onChange={((e, data)=>{console.log(data.value); setTergetLanguage(data.value);})}
                    />
                    <Form.TextArea
                        type='text'
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <Button  
                        color="teal"
                        fluidsize='large'       
                        type="submit"
                        className={`search-button ${searchText.trim() ? "active" : null}`}
                        disabled={!searchText.trim()}
                    >
                        Translate
                    </Button>
                </Segment>
            </Form>
        </div>
    )
}

export default Input