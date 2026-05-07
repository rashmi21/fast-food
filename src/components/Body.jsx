import { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurentCard from "./RestaurentCard";
import restList from "../utils/mockData";

const Body = () => {
    const [listData,setListData] = useState(restList);
    return (
        <div id="body">
            {/* <SearchBar/> */}
            <div>
                <button className="top-rated-filter" onClick={() => {
                    const topRatedList = listData?.filter((restaurent) => restaurent?.info?.avgRating >= 4.3 )
                    setListData(topRatedList);
                }}>Top Rated Filter</button>
            </div>
            <div className="res-container">
                {listData?.map((restaurent) =>  <RestaurentCard key={restaurent.info.id} resData={restaurent}/>)}
            </div>
        </div>
    )
}

export default Body;