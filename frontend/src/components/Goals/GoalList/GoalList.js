import React from "react";
import './GoalList.css'

const GoalList = props => {
    console.log(props.goals);
    return (
        <ul className='goal-list'>
            {/* {[<li>Hi</li>,
            <li>This Works</li>]} //or we can use... */}

            {props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
    );
};

export default GoalList;