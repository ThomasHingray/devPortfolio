import github from '../../assets/icons/githubFooter.png';
import linkedIn from '../../assets/icons/linkedIn.png';
import mail from '../../assets/icons/mail.png'

function Footer () {
    return (
        <footer>
            <div>
                <a href="mailto:thomashingray@hotmail.fr">
                    <img src={mail} alt="M'envoyer un e-mail" />
                </a>
                <a href="https://github.com/ThomasHingray">
                    <img src={github} alt="Lien vers GitHub" />
                </a>
                <a href="https://linkedin.com/in/thomas-hingray">
                    <img src={linkedIn} alt="Lien vers LinkedIn" />
                </a>
            </div>
            <p>Créé par Thomas Hingray</p>
        </footer>
    )
}

export default Footer