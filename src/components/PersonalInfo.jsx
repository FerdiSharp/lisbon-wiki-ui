import React, { useState } from "react";
import PersonelButton from "./PersonelButton"

function PersonalInfo({ fullName, age }) {
    const [isLogin, setLogin] = useState(false)
    function handleClick() {
        setLogin((prevState) => !prevState)
    }
    return (
        <>
            <h2>{fullName} with age of {age}. Login : {isLogin ? "Yes" : "No"}</h2>
            <PersonelButton text={fullName} onClick={handleClick} />
        </>
    )
}

export default PersonalInfo