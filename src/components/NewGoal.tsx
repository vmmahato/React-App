import { useRef, type FormEvent } from "react";

type NewGoalprops={
    onAddNewGoal:(goal:string,summary:string)=>void;
}

export default function newGoal({onAddNewGoal}:NewGoalprops)
{
    const goal =useRef<HTMLInputElement>(null);
    const summary =useRef<HTMLInputElement>(null);
   
    function handleSubmmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        //new FormData(event.currentTarget)
        const enteredgoal=goal.current!.value;
        const enteredsummary=summary.current!.value;
        onAddNewGoal(enteredgoal,enteredsummary);
    }

    return(
    <form onSubmit={handleSubmmit}> 
        <p>
            <label>Your Goal</label>
            <input id="goal" type="text" ref={goal}/>
        </p>
        <p>
            <label>Summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <><button>Add Goal</button></>
        </p>
    </form>
);
}