function Greetings(props) {
    switch (props.lang) {
        case "en":
            return (
                <div className="greeting">
                    <p>Howdy, {props.children}</p>
                </div>
            )
        case "de":
            return (
                <div className="greeting">
                    <p>Hallo, {props.children}</p>
                </div>
            )
        case "es":
            return (
                <div className="greeting">
                    <p>Hola, {props.children}</p>
                </div>
            )
        case "fr":
            return (
                <div className="greeting">
                    <p>Bonjour, {props.children}</p>
                </div>
            )
        default :
            return (
                <div className="greeting">
                    <p>Hello, {props.children}</p>
                </div>
            )
    }
}

export default Greetings;