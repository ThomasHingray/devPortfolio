import { useState } from "react"

function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {

        setMenu(!menu)

        let links = document.querySelectorAll(".navLinks")

        if (menu) {
            links.forEach(link => {
                link.style="display:inline"
            })
        } else {
            links.forEach(link => {
                link.style="display:none"
            })
        }
        
    }

    return (
        <nav>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
            <a className="navLinks" href='#skillsSection'>Mes compétences</a>
            <a className="navLinks" href='#portfolio'>Mes travaux</a>
            <a className="navLinks" href='#about'>À propos</a>
            <a className="navLinks" href='#contact'>Contact</a>
        </nav>
    )
}

export default Header