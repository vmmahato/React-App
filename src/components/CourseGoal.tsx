import type { ReactNode } from "react";
//import type { FC, ReactNode } from "react";
//interface CourseGoalProps={
    //title:string;
    //description:string;
//}

//OR

type CourseGoalProps={
    id:number;
    title:string;
    children:ReactNode;
    onDelete:(id:number)=>void;
}


/* const CourseGoal:FC<CourseGoalProps>=({title,children})=>{
    return (<article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>delete</button>
    </article>); 
}

export default CourseGoal; */

//OR

 export default function CourseGoal(
{
    id,
    title,
    children,
    onDelete,
}:CourseGoalProps
)
{
    return (<article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={()=>onDelete(id)}>delete</button>
    </article>);
    
} 