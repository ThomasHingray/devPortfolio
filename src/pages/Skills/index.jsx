import skillCards from '../../assets/skills.json'

function Skills() {
    
    return (
        <section id = "skillContainer">
            <h2>Compétences</h2>
            {skillCards.map((skillCard, index) => (
                <div className= {`skillCard card${index + 1}`} key={skillCard.category}>
                    <h3>{skillCard.category}</h3>
                    <ul>
                        {skillCard.skills.map(skill => (
                            <li key={skill.name}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Skills