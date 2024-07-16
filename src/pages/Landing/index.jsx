import forrest from '../../assets/parallax/forrest.png';
import barren from '../../assets/parallax/barren2.png';
import cliff from '../../assets/parallax/cliff2.png';
import foret from '../../assets/parallax/foret.png';
import tree from '../../assets/parallax/tree2.png';
import { useEffect, useState } from 'react';

function Landing () {


    let [yValue, setYValue] = useState(0);
    const [isVisible, setIsVisible] = useState(true);


    useEffect (() => {
        window.addEventListener('scroll', (e) => {
            setYValue(window.scrollY)
        })

        if (window.scrollY > 1000) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

    }, [yValue]);


    return (
        <section id="landing">
            {isVisible && (
                <>
                <img className="landingContent" src={forrest} alt="" style={{marginTop: `${yValue*1}px`, transform: `translateX(${yValue*1}px)`}}/>
                <img className="landingContent" src={barren} alt="" style={{marginTop: `${yValue*0.5}px`, transform: `translateX(${yValue*-1}px)`}}/>
                <img className="landingContent" src={tree} alt="" style={{transform: `translateX(${yValue*1.5}px)`}}/>
                <img className="landingContent" src={cliff} alt="" style={{transform: `translateX(${yValue*-1.5}px)`}}/>
                <h1 className="landingContent" style={{marginTop: `${yValue*2}px`}}>Thomas Hingray,<span>&nbsp;développeur&nbsp;</span>web et mobile</h1>
                </>
            )}
            <img className="landingContent" src={foret} alt="" />
        </section>
    )
}

export default Landing