import React, { useCallback, useReducer } from 'react';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/util/validator';
import Button from '../../Shared/Components/FormElements/Button';
import Input from '../../Shared/Components/FormElements/Input';
import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.input) {
                    formIsValid = formIsValid && action.isValid;
                }
                else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend
    };

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please Enter a valid title.'
                onInput={inputHandler} />

            <Input id='description'
                element='textarea'
                label='Descripton'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                errorText='Please Enter a valid valid description, atleast 5 char.'
                onInput={inputHandler} />

            <Input id='address'
                element='input'
                label='Address'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                errorText='Please Enter a valid valid address.'
                onInput={inputHandler} />

            <Button type='submit' disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    );
}

export default NewPlace;