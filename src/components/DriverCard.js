import Rating from "./Rating";

function DriverCard(props) {
    return (
        <div className="drivercard">
            <img className="circleborder" src={props.img} alt=""/>
            <div className="driverdata">
                <h1>{props.name}</h1>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;