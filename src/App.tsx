
import CourseGoalList from "./components/CourseGoalList.tsx";
import reactLogo from "./assets/react.svg"
import Header from "./components/Header.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal={
  title:string;
  description:string;
  id:number;
}

export default function App()
{
  const [goals, setGoals]=useState<CourseGoal[]>([]);
  
  function handleAddGoal(goal:string,summary:string)
  {
    setGoals(prevGoals => {
      const newGoal:CourseGoal={
        id:Math.random(),
        title:goal,
        description:summary
      };
      return [...prevGoals,newGoal]

    });
  }

  function handleOnDelete(id:number)
  {
    setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id!==id));
  }

  return (<main>
    <Header image={{src:reactLogo,alt:'A list of goals'}}>
      <h1>Your course goals</h1>
    </Header>
    {/* <button onClick={handleAddGoal}>Add Goal</button> */}
    <NewGoal onAddNewGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDeleteHanlde={handleOnDelete}/>
  </main>
  );
  
}