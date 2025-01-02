import React, {useState} from "react";
import './NewGoal.css'

const NewGoal = props => {
    const [userInput, setUserInput] = useState();

    const addGoalHandler = event => {
        event.preventDefault();


        const newGoal = {
            id: Math.random.toString(),
            text: userInput
        };

        setUserInput('');
        props.onAddGoal(newGoal);
    };
    
    const textChangeHandler = event =>
    {
        setUserInput(event.target.value);
    }

    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type='text' value={userInput} onChange={textChangeHandler} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='submit'>Add text</button>
        </form>
    );
};

export default NewGoal;