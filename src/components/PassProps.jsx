import React from "react";
import { getAnotherImage } from "../js_files/utils";

const Profile3 = () => {
    return ( 
        <div>
            <h2>Passing Props to a Component</h2>
            <Avatar 
            person={{ 
                name: "Katsuko Saruhashi", 
                imageId: "YfeOqp2"
            }}
            size={100}
            /> 
            <Avatar 
            person={{ 
                name: "Aklilu Lemma", 
                imageId: "OKS67lh"
            }}
            size={80}
            /> 
            <Avatar 
            person={{ 
                name: "Lin Lanying", 
                imageId: "1bX5QH6"
            }}
            size={50}
            /> 
        </div>
    )
}

export default Profile3

const Avatar = ({person, size}) => {
    // person and size are available here
    return (
        <img 
        className="avatar"
        src={getAnotherImage(person)} 
        alt={person.name} 
        width={size}
        height={size}
        />
    )
}