

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img src={props.image}></img>
            <h2>{props.name}</h2>
            <h3>{props.location }</h3>
            <h4>{props.rating} stars</h4>
        </div>
    )
}

export default RestaurantCard;