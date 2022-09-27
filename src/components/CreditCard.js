function CreditCard(props) {
    let bgColor = props.bgColor;
    let textColor = props.color;
    let cardNum = props.number;

    let lastFour = cardNum.slice(-4);

    return (
        <div className="creditcard" style={{backgroundColor: bgColor, color: textColor}}>
            <h2>{props.type}</h2>
            <h1>.... .... .... {lastFour}</h1>
            <p>Expires {props.expirationMonth}/{props.expirationYear} | {props.bank}<br/>{props.owner}</p>
        </div>
    )
}

export default CreditCard;