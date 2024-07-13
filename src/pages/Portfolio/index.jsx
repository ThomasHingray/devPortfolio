import testDino from "../../assets/worksImages/testDino.png"
import booki from "../../assets/worksImages/booki.png"
import kasa from "../../assets/worksImages/kasa.png"
import monVieuxGrimoire from "../../assets/worksImages/monVieuxGrimoire.png"
import ninaCarducci from "../../assets/worksImages/ninaCarducci.png"
import portfolio from "../../assets/worksImages/portfolio.png"
import sophieBluel from "../../assets/worksImages/sophieBluel.png"
import works from "../../assets/works.json"

function Portfolio() {

    let pictures = {
        "testDino": testDino,
        "booki": booki,
        "kasa" : kasa,
        "monVieuxGrimoire" : monVieuxGrimoire,
        "ninaCarducci" : ninaCarducci,
        "portfolio" : portfolio,
        "sophieBluel" : sophieBluel
    }

    return (
        <section className="portfolio">
            <div id="workCardContainer">
                {works.map((work) => (
                    <div className="workCard" key={work.name}>
                        <img src={pictures[work.picture]} alt ={work.name}/>
                        <h2>{work.name}</h2>
                    </div>
                    
                ))}
            </div>
            
        </section>
    )
}

export default Portfolio
