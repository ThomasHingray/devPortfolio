import { useState } from "react"

function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <nav className={`${menu ? "showNavLinks" : "hideNavLinks"}`}>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
            <a className="navLinks" href='#skillsSection' onClick={closeMenu}>Mes compétences</a>
            <a className="navLinks" href='#portfolio' onClick={closeMenu}>Mes travaux</a>
            <a className="navLinks" href='#about' onClick={closeMenu}>À propos</a>
            <a className="navLinks" href='#contact' onClick={closeMenu}>Contact</a>
        </nav>
    )
}

export default Header