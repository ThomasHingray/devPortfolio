import forrest from '../../assets/parallax/forrest.png';
import barren from '../../assets/parallax/barren2.png';
import cliff from '../../assets/parallax/cliff2.png';
import foret from '../../assets/parallax/foret.png';
import tree from '../../assets/parallax/tree2.png';
import background from '../../assets/parallax/background2.png';
import cover from '../../assets/cover.png'
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Landing () {


    let [yValue, setYValue] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    //----- Récupérer la valeur de Y pour déplacer les éléments de décor en fonction et les supprimer au-delà de 1000 px pour alléger la page -----

    useEffect (() => {
        window.addEventListener('scroll', (e) => {
            setYValue(window.scrollY)
        })

        if (window.scrollY > 900) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

    }, [yValue]);


    return (
        <section id="landing">
            <Helmet>
                <meta property="og:image" content={"https://thomashingray.github.io" + cover} />
                <meta name="twitter:image" content={"https://thomashingray.github.io" + cover} />
            </ Helmet>
            {isVisible && (
                <div className="parallax">
                    <img className="landingContent" src={forrest} alt="" style={{marginTop: `${yValue*1}px`, transform: `translateX(${yValue*1}px)`}}/>
                    <img className="landingContent" src={barren} alt="" style={{marginTop: `${yValue*0.5}px`, transform: `translateX(${yValue*-1}px)`}}/>
                    <img className="landingContent" src={tree} alt="" style={{transform: `translateX(${yValue*1.5}px)`}}/>
                    <img className="landingContent" src={cliff} alt="" style={{transform: `translateX(${yValue*-1.5}px)`}}/>
                    <h1 className="landingContent" style={{marginTop: `${yValue*2}px`}}>Thomas Hingray,<span>&nbsp;développeur&nbsp;</span>Fullstack</h1>
                    <img className="landingContent" src={foret} alt="" />
                </div>
            )}

            {/* === Si l'écran est trop petit, on supprime le parallax pour passer à un fond fixe === */}
            <div className='noParallax'>
                <img src={background} alt="background"/>
                <h1>Thomas Hingray,<span>&nbsp;développeur&nbsp;</span>Fullstack</h1>
            </div>
            
        </section>
    )
}

export default Landing