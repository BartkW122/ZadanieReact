export default function Form(){
    return(
        <form>
            <label>
                Imie:
                <input type="text" placeholder="podaj imie..."/>
            </label>

            <label>
                nazwisko:
                <input type="text" placeholder="podaj naziwsko..."/>
            </label>

            <label>
                email:
                <input type="email" placeholder="podaj email..."/>
            </label>

            <button type="submit">Zaloguj się</button>
        </form>
    )
}