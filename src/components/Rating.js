function Rating(props) {
    let stars = Math.round(props.children);
    let formated = ['far', 'far', 'far', 'far', 'far'];

    for (let i = 0; i < stars; i++) {
        formated[i] = 'fas';
    }

    return (
        <div className="rating">
            <i className={formated[0] + ' fa-star'}></i>
            <i className={formated[1] + ' fa-star'}></i>
            <i className={formated[2] + ' fa-star'}></i>
            <i className={formated[3] + ' fa-star'}></i>
            <i className={formated[4] + ' fa-star'}></i>
        </div>
    )
}

export default Rating;