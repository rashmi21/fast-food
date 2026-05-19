import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurentDetails from "../utils/useRestaurentDetails";
import Shimmer from "../components/Shimmer";
import RestaurentCategory from "./RestaurentCategory";

const Restaurent = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentDetails(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.data?.cards[0]?.card?.card?.text;
  const categories =
    resInfo.data.cards[1].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center bg-orange-200 h-192 overflow-y-auto relative">
      <h1 className=" font-bold my-2 text-2xl">{name}</h1>
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          isItemVisible={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurent;
