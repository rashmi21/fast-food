import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import {RESTAURENT_URL} from "../utils/constant";
import Shimmer from "./Shimmer";
// import restList from "../utils/mockData";

const Body = () => {
    const [listData,setListData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [originalAPIList,setOriginalAPIList] = useState([]);

    useEffect( () => {
        fetchData();
         
    },[])

    const fetchData = async () => {
        const data = await fetch(RESTAURENT_URL);
        const jsonData = await data.json();
        setListData(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setOriginalAPIList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div id="body">
            <div>
                <input type="text" onChange={(e) => {
                    setSearchText(e.target.value);
                }} className="search-data" value={searchText}/>
                <button onClick={() =>{
                    const filterList = originalAPIList?.filter((restaurent) => restaurent?.info?.name.toLowerCase().includes(searchText.toLowerCase()) )
                    setListData(filterList);
                }} className="search-button">Search</button>
                <button className="top-rated-filter" onClick={() => {
                    const topRatedList = originalAPIList?.filter((restaurent) => restaurent?.info?.avgRating >= 4.3 )
                    setListData(topRatedList);
                }}>Top Rated Filter</button>
            </div>
            <div className="res-container">
                { listData.length === 0 ? <Shimmer/> : listData?.map((restaurent) =>  <RestaurentCard key={restaurent.info.id} resData={restaurent}/>)}
            </div>
        </div>
    )
}

export default Body;