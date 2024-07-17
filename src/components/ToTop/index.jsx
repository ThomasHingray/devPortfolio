import { useEffect, useState } from "react"
import React from 'react';


function ToTop () {

    let [display, setDisplay] = useState("none")
    let [aria, setAria] = useState("true")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>300){
                setDisplay("block")
                setAria("false")
            } else {
                setDisplay("none")
                setAria("true")
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
            <i className="fa-solid fa-arrow-up"  
                aria-hidden={aria}
                id="toTopButton"
                onClick={handleClick}
                style={{display: display}}>
            </i>
    )
}

export default ToTop