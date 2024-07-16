import testDino from "../../assets/worksImages/testDino.png"
import kasa from "../../assets/worksImages/kasa.png"
import booki from "../../assets/worksImages/booki.png"
import monVieuxGrimoire from "../../assets/worksImages/monVieuxGrimoire.png"
import ninaCarducci from "../../assets/worksImages/ninaCarducci.png"
import portfolio from "../../assets/worksImages/portfolio.png"
import sophieBluel from "../../assets/worksImages/sophieBluel.png"

let pictures = {
    "testDino": testDino,
    "kasa" : kasa,
    "booki": booki,
    "monVieuxGrimoire" : monVieuxGrimoire,
    "ninaCarducci" : ninaCarducci,
    "portfolio" : portfolio,
    "sophieBluel" : sophieBluel
}

function TopWorkCard ({name, description, picture, skills, challenge, link}) {
    let tag = name === "testDino" ? "topWorkCard" : "topWorkCard reverse"

    if (name !== "testDino" && name !== "Kasa"){
        tag += " modalWork"
    }

    return (
        <div className= {tag}>
            <div className= "topWorkImage">
                <img src={pictures[picture]} alt=""/>
            </div>
            <div className= "topWorkText">
                <h3>{name}</h3>
                <ul>
                    {skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <p>{description}</p>
                <p><span>Challenge : </span>{challenge}</p>
                <div className="topWorkLink"><a href={link} target="_blank" rel='noopener noreferrer'>Repository</a></div>
            </div>
        </div>
    )
}

export default TopWorkCard