import React from "react"

export interface Person {
    firstName: string;
    lastName: string;
}

export interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string)=> string;
    obj? : Person
}

export const TextField:React.FC<Props> = () =>{
    return (
        <div>
            <input></input>
        </div>
    )
}