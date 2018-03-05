import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea  } from 'react-form';

import logo from './logo.svg';
import './App.css';

const validate = value => ({
    error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
    warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
    success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
});

const statusOptions = [
    {
        label: 'Value A',
        value: 'A',
    },
    {
        label: 'Value B',
        value: 'B',
    },
    {
        label: "Value C",
        value: 'C',
    },
]

class App extends Component {

    render() {
        return (
            <div>
                <div  className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React< /h1>
                    </header>
                </div>

                <div className="wrapper">
                    <h1>MY AWESOME FORM</h1>
                    <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                        {formApi => (
                            <form onSubmit={formApi.submitForm} id="form2">
                                <label htmlFor="ohMyTextField">oh My Text Field</label>
                                <Text field="firstName" id="ohMyTextField"/>
                                <RadioGroup field="ohMyRadio">
                                    <label htmlFor="radioA" className="mr-2">Radio button option A</label>
                                    <Radio value="radioOptionA" id="radioA" className="mr-3 d-inline-block" />
                                    <label htmlFor="radioB" className="mr-2">Radio button option A</label>
                                    <Radio value="radioOptionB" id="readioB" className="d-inline-block" />
                                </RadioGroup>
                                <label htmlFor="multiLine">Tons of text to write here</label>
                                <TextArea field="multiLine" id="multiLine" />
                                <label htmlFor="ohMyCheckBox" className="mr-2">Oh its a CHECKBOX!!!</label>
                                <Checkbox field="ohMyCheckBox" id="ohMyCheckBox" className="d-inline-block" />
                                <label htmlFor="status" className="d-block">Oh shi** it's a DROPDOWN here!</label>
                                <Select field="status" id="status" options={statusOptions} className="mb-4" />
                                <button type="submit" className="mb-4 btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        )}
                    </Form>

                </div>


            </div>
    );
    }
    }

    export default App;
