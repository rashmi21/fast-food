import {CDN_URL} from "../utils/constant"

const RestaurentCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sal  } = props.resData.info
    return (
        <div className="restaurent-card">
            <img className="card-logo" src={CDN_URL +cloudinaryImageId}/>
            <h3 className="card-heading">{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sal?.slaString}</h4>
        </div>
    )
}

export default RestaurentCard;