import { useState, useEffect, useContext } from "react";
import RestaurentCard, { restaurentCardWithDiscount } from "./RestaurentCard";
import { RESTAURENT_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [originalAPIList, setOriginalAPIList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { loggedinUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_URL);
    const jsonData = await data.json();
    // console.log(jsonData);
    setListData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setOriginalAPIList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  // console.log(listData);

  if (onlineStatus === false)
    return (
      <div className="bg-orange-200 h-192 overflow-y-auto">
        <h1>
          Looks like you are offline !!! - Please check your internet connection
          !!!
        </h1>
      </div>
    );

  const RestaurentCardWithDiscount = restaurentCardWithDiscount(RestaurentCard);

  return (
    <div id="body" className="bg-orange-200 h-8/12 overflow-y-auto relative">
      <div className="p-4 mx-4">
        <input
          data-testid="searchInput"
          className="bg-white rounded-sm w-100 border border-solid border-black"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          className="bg-amber-600 m-4 px-4 border border-solid border- border-black rounded-sm cursor-pointer"
          onClick={() => {
            const filterList = originalAPIList?.filter((restaurent) =>
              restaurent?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );
            setListData(filterList);
          }}
        >
          Search
        </button>
        <button
          className="bg-amber-600 m-4 px-4 border border-solid border- border-black rounded-sm cursor-pointer"
          onClick={() => {
            const topRatedList = originalAPIList?.filter(
              (restaurent) => restaurent?.info?.avgRating >= 4.3,
            );
            setListData(topRatedList);
          }}
        >
          Top Rated Filter
        </button>
        <label>User Name : </label>
        <input
          value={loggedinUser}
          className="bg-white border border-black rounded-sm"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {listData?.length == 0 ? (
          <Shimmer />
        ) : (
          listData?.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurent/" + restaurent.info.id}
            >
              {restaurent?.info?.aggregatedDiscountInfoV3 ? (
                <RestaurentCardWithDiscount resData={restaurent} />
              ) : (
                <RestaurentCard resData={restaurent} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
