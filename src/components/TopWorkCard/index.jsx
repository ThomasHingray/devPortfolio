import testDino from "../../assets/worksImages/testDino.png"
import kasa from "../../assets/worksImages/kasa.png"

let pictures = {
    "testDino": testDino,
    "kasa" : kasa,
}

function TopWorkCard ({name, description, picture, skills, challenge, link}) {
    const tag = name === "testDino" ? "topWorkCard" : "topWorkCard reverse"
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