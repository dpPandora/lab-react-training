function IdCard(props) {
    //let [lastName, firstName, gender, height, birth, picture] = props;
    return (
        <div className="idCard">
            <img src={props.picture} alt="pfp"/>
            <p><b>First Name</b>: {props.firstName} <br/><b>Last Name</b>: {props.lastName}<br/><b>Gender</b>: {props.gender}<br/><b>Height</b>: {props.height}<br/><b>Birthdate</b>: {props.birth.toDateString()}</p>
        </div>
    )
}

export default IdCard;