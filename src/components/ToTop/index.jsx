import { useEffect, useState } from "react"
import React from 'react';


function ToTop () {

    let [display, setDisplay] = useState("none")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>300){
                setDisplay("block")
            } else {
                setDisplay("none")
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return (
        <button
            id="toTopButton"
            onClick={handleClick}
            style={{display: display}}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    )
}

export default ToTop