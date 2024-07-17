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
    let tag = name === "Quel dinosaure êtes vous ?" ? "topWorkCard" : "topWorkCard reverse"

    if (name !== "Quel dinosaure êtes vous ?" && name !== "Kasa"){
        tag += " modalWork"
    }

    return (
        <div className= {tag} key={`top${name}`}>
            <div className= "topWorkImage">
                <img src={pictures[picture]} alt={`Capture du projet ${name}`}/>
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
                <div className="topWorkLink"><a href={link} target="_blank" rel='noopener noreferrer'>À découvrir ici</a></div>
            </div>
        </div>
    )
}

export default TopWorkCard