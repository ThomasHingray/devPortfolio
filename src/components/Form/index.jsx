function Form () {
    return (
        <form>
            <label for="email">E-mail :</label>
            <input type="email" id="email"></input>

            <label for="name">Nom :</label>
            <input type="text" id="name"></input>

            <label for="subject">Sujet :</label>
            <input type="text" id="subject"></input>

            <label for="message">Message :</label>
            <textarea id="message"></textarea>
           
        </form>
    )
}

export default Form