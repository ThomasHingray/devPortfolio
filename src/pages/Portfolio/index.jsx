import works from "../../assets/works.json"
import TopWorkCard from "../../components/TopWorkCard"
import WorkCard from "../../components/WorkCard"
import { useState } from "react";

function Portfolio() {

    const topWorks = works.filter(work => work.name === "testDino" || work.name === "Kasa");
    const updatedWorks = works.filter(work => work.name !== "testDino" && work.name !== "Kasa");

    const [modal, setModal] = useState(false);
    const [target, setTarget] = useState();

    const toggleModal = (work) => {

        modal? 
            setModal(!modal):
            setTarget(work)
            setModal(!modal)
            
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                    <div className="workCard" onClick={() =>toggleModal(work)}>
                        <WorkCard 
                            name={work.name} 
                            picture={work.picture} 
                            key={work.name}
                        />
                    </div>
                ))}
            </div>
            {modal && (
                <div id="modal">
                    <div id="overlay" onClick={toggleModal}></div>
                    <div id="modal-content">
                        <TopWorkCard
                            name={target.name}
                            skills={target.skills}
                            description={target.description}
                            challenge={target.challenge}
                            link={target.link}
                            picture={target.picture}
                            key={target.name}
                        />
                    </div>
                </div>
            )}
            
        </section>
    )
}

export default Portfolio
