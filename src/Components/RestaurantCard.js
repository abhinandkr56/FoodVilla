import { Link } from "react-router-dom";


const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <Link to={`/restaurent/${props.restaurentid}`}>
            <img src={props.image} className="restaurant-card-img"></img>
            <h2>{props.name}</h2>
            <h3>{props.location }</h3>
            <h4>{props.rating} stars</h4>
            </Link>
        </div>
    )
}

export default RestaurantCard;