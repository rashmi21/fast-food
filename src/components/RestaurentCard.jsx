import { CDN_URL } from "../utils/constant";

const RestaurentCard = ({ resData }) => {
  // console.log(resData);

  return (
    <div
      data-testid="resCard"
      className="shadow-2xl w-90 h-90 m-4 p-4 border border-solid border- border-black rounded-sm hover:bg-orange-300"
    >
      <img
        className="w-80 h-50 rounded-sm"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3 className="card-heading">{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines?.join(", ")}</h4>
      <h4>{resData?.info?.avgRating} Star</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <h4>{resData?.info?.sal?.slaString}</h4>
    </div>
  );
};

export const restaurentCardWithDiscount = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <span className="bg-black text-gray-50 m-2 p-2 absolute rounded-r-sm rounded-bl-lg">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header +
            " " +
            props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </span>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
