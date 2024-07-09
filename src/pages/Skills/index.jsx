import skillCards from '../../assets/skills.json'

function Skills() {
    
    return (
        <section className = "skillContainer">
            {skillCards.map((skillCard) => (
                <div className= "skillCard" key={skillCard.category}>
                    <h2>{skillCard.category}</h2>
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