import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border p-2.5 m-2.5 bg-orange-100 rounded hover:bg-orange-400">
      <Link to={`/restaurent/${props.restaurentid}`}>
        <img
          src={props.image}
          className="restaurant-card-img w-full h-72"
        ></img>
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
        <h4>{props.rating} stars</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
