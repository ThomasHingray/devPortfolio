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
import cv from '../../assets/cv_Thomas_Hingray.pdf'
import jest from '../../assets/icons/jest.png'
import cypress from '../../assets/icons/cypress.png'
import nest from '../../assets/icons/nest.jpg'
import tailwind from '../../assets/icons/tailwind.jpg'
import docker from '../../assets/icons/docker.jpg'
import aws from '../../assets/icons/aws.jpg'
import nginx from '../../assets/icons/nginx.png'
import mySql from '../../assets/icons/mySql.jpg'

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
    "jest":jest,
    "cypress":cypress,
    "nest":nest,
    "tailwind":tailwind,
    "docker":docker,
    "aws":aws,
    "nginx":nginx,
    "mySql":mySql   
}

function Skills() {

    return (
        <>
        <section id="skillsSection">
            
            
            <div id = "skillContainer">
                <img src={roots} alt="background"/>
                <h2>Compétences</h2>
                <div id="skillCardsContainer">
                    <div id="slider">
                        {skillCards.map((skillCard, index) => (
                            <div className= "skillCard" key={index}>
                                <h3>{skillCard.category}</h3>
                                <ul>
                                    {skillCard.skills.map(skill => (
                                        <li key={skill.name}>
                                            {skill.logo?<img src={icons[skill.logo]} alt={`Logo de ${skill.name}`}/>:null}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div id="slider">
                        {skillCards.map((skillCard, index) => (
                            <div className= "skillCard double" key={index}>
                                <h3>{skillCard.category}</h3>
                                <ul>
                                    {skillCard.skills.map(skill => (
                                        <li key={skill.name}>
                                            {skill.logo?<img src={icons[skill.logo]} alt={`Logo de ${skill.name}`}/>:null}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p><span>Formation</span>: cursus Concepteur Développeur d'Applications (<span>CDA</span>) avec Alt - Incubateur Tech</p>
                <p className="link"><a href={cv} download="cv_Thomas_Hingray">Télécharger mon CV</a></p>
            </div>
        </section>
        </>
    )
}

export default Skills