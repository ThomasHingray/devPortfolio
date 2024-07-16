import skillCards from '../../assets/skills.json'
import css from '../../assets/icons/css.png'
import expressJS from '../../assets/icons/expressJS.png'
import github from '../../assets/icons/github.png'
import html from '../../assets/icons/html.png'
import javascript from '../../assets/icons/javascript.webp'
import lighthouse from '../../assets/icons/lighthouse.svg'
import mongoDB from '../../assets/icons/mongoDB.png'
import nodeJS from '../../assets/icons/nodeJS.png'
import notion from '../../assets/icons/notion.png'
import reactJS from '../../assets/icons/react.png'
import sass from '../../assets/icons/sass.png'
import wave from '../../assets/icons/WAVE.jpeg'
import roots from '../../assets/parallax/roots2.png'

let icons = {
    "css":css,
    "expressJS":expressJS,
    "github":github,
    "html":html,
    "javascript":javascript,
    "lighthouse":lighthouse,
    "mongoDB":mongoDB,
    "nodeJS":nodeJS,
    "notion":notion,
    "reactJS":reactJS,
    "sass":sass,
    "wave":wave,    
}

function Skills() {

    return (
        <>
        <section id="skillsSection">
            <img src={roots} alt="background"/>
            
            <div id = "skillContainer">
                <h2>Compétences</h2>
                <div id="skillCardsContainer">
                    <div id="slider">
                        {skillCards.map((skillCard, index) => (
                            <div className= "skillCard" key={index}>
                                <h3>{skillCard.category}</h3>
                                <ul>
                                    {skillCard.skills.map(skill => (
                                        <li key={skill.name}>
                                            {skill.logo?<img src={icons[skill.logo]} alt={skill.name}/>:null}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {skillCards.map((skillCard, index) => (
                            <div className= "skillCard" key={index}>
                                <h3>{skillCard.category}</h3>
                                <ul>
                                    {skillCard.skills.map(skill => (
                                        <li key={skill.name}>
                                            {skill.logo?<img src={icons[skill.logo]} alt={skill.name}/>:null}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills