import testDino from "../../assets/testDino.png"
import booki from "../../assets/booki.png"
import kasa from "../../assets/kasa.png"
import monVieuxGrimoire from "../../assets/monVieuxGrimoire.png"
import ninaCarducci from "../../assets/ninaCarducci.png"
import portfolio from "../../assets/portfolio.png"
import sophieBluel from "../../assets/sophieBluel.png"
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
