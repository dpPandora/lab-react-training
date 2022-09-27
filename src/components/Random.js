function Random(props) {
    let randNum = Math.floor(Math.random() * (props.max - props.min)) + props.min;

    return (
        <div className="default">
            <p>Random value between {props.min} and {props.max} ={">"} {randNum}</p>
        </div>
    )
}

export default Random;