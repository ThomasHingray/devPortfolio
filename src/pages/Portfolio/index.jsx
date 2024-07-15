import works from "../../assets/works.json"
import TopWorkCard from "../../components/TopWorkCard"
import WorkCard from "../../components/WorkCard"

function Portfolio() {

    const topWorks = works.filter(work => work.name === "testDino" || work.name === "Kasa");
    const updatedWorks = works.filter(work => work.name !== "testDino" && work.name !== "Kasa");


    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div id="topWorkContainer">
                {topWorks.map((work) =>(
                    <TopWorkCard
                        name={work.name}
                        skills={work.skills}
                        description={work.description}
                        challenge={work.challenge}
                        link={work.link}
                        picture={work.picture}
                        key={work.name}
                    />
                ))}
            </div>
            <div id="workCardContainer">
                {updatedWorks.map((work) => (
                    <WorkCard 
                        name={work.name} 
                        picture={work.picture} 
                        key={work.name}/>
                ))}
            </div>
            
        </section>
    )
}

export default Portfolio
