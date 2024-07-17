import booki from "../../assets/worksImages/booki.png"
import monVieuxGrimoire from "../../assets/worksImages/monVieuxGrimoire.png"
import ninaCarducci from "../../assets/worksImages/ninaCarducci.png"
import portfolio from "../../assets/worksImages/portfolio.png"
import sophieBluel from "../../assets/worksImages/sophieBluel.png"

let pictures = {
    "booki": booki,
    "monVieuxGrimoire" : monVieuxGrimoire,
    "ninaCarducci" : ninaCarducci,
    "portfolio" : portfolio,
    "sophieBluel" : sophieBluel
}

function WorkCard ({name, picture}) {
    return (
        <>
            <img src={pictures[picture]} alt ={`Capture du projet ${name}`}/>
            <h2>{name}</h2>
        </>
    )
}

export default WorkCard