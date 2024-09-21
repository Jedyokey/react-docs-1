import React from "react";
import { getAnImage2 } from "../js_files/utils";

const Profile6 = () => {
    return (
        <div>
            <Avatar3 
                size={40}
                person={{
                    name: "John Doe",
                    imageId: "7vQD0fP"
                }}
            />
            <Avatar3 
                size={120}
                person={{
                    name: "John Doe",
                    imageId: "7vQD0fP"
                }}
            />
        </div>
    )
}

export default Profile6;


const Avatar3 = ({person, size}) => {
    // const imageSrc = getAnImage(person);
    let thumbnailSize = "s";
    if (size > 90) {
        thumbnailSize = "b";
    }

    return (
        <img 
            className="avatar3"
            src={getAnImage2(person, thumbnailSize)} 
            alt={person.name}
            width={size}
            height={size}
        />
    )
}