import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../store/cartSlice";

const ItemList = ({ items, action }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="text-left border-b-[1] border-black m-2 flex justify-between"
          >
            <div className="w-2/12 m-2">
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
            <div className="w-10/12">
              <div className=" text-m font-bold m-2 flex justify-between">
                <span className="w-10/12">{item.card.info.name}</span>
                <span className="w-2/12">
                  ₨:{(item.card.info.price | item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <div className=" flex justify-between">
                <div className="m-2 w-10/12"> {item.card.info.description}</div>
                <button
                  onClick={() => handleAddItem(item)}
                  className="h-8 w-2/12 bg-black text-white mx-4 px-4 cursor-pointer rounded-sm"
                >
                  {action}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
