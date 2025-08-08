import CourseGoal from "./CourseGoal";
import {type CourseGoal as Cgoals} from "../App"
type CourseGoalProps=
{
    goals:Cgoals[];
    onDeleteHanlde:(id:number)=>void;
};

export default function CourseGoalList({goals,onDeleteHanlde}:CourseGoalProps)
{
    return(
    <ul>
    {goals.map((goal)=>(
    <li key={goal.id}>
    <CourseGoal id={goal.id} title={goal.title}  onDelete={onDeleteHanlde}>
    <p>{goal.description}</p>
    </CourseGoal>
    </li>
    ))}
    </ul> 
    )
}