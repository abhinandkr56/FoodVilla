import { useState } from "react";

const Section = ({title, descriptions, isVisible, setIsVisible}) => {

    return (<div className="border border-black p-2 m-2">
        <h1 className="text-2.xl font-bold ">{title}</h1>
        {
            !isVisible ? <button className="underline cursor-pointer" onClick={() => setIsVisible(true)}>
            Show
        </button>
        : <button className="underline cursor-pointer" onClick={() => setIsVisible(false)}>
            Hide
        </button>
        }
        
        {isVisible && <p>{descriptions}</p>}
    </div>)
}

export default Section;