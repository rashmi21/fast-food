import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, isItemVisible, setShowIndex }) => {
  // const [isItemVisible, setIsItemVisible] = useState(false);

  return (
    <div>
      <div className=" w-6/12 mx-auto my-2 bg-orange-400 shadow-2xl p-4 rounded-sm border border-solid border-black">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            if (isItemVisible) {
              setShowIndex(null);
              console.log(isItemVisible);
            } else {
              setShowIndex();
            }
          }}
        >
          <span className="m-2 font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className=" m-2">⬇️</span>
        </div>
        {isItemVisible && <ItemList items={data.itemCards} action="Add" />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
