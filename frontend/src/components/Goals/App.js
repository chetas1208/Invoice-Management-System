import React, { useState } from 'react';
import './App.css';

import GoalList from './components/Goals/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the course.' },
    { id: 'cg2', text: 'Learn all about the main topic.' },
    { id: 'cg3', text: 'Help others for this course in QNA.' }
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div>
      <h2><u>Course Goals</u></h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render()
//   {
//     return (
//     <div>
//       <h2><u>Course Goals</u></h2>
//       <GoalList />
//     </div>
//     );
//   }
// }


export default App;