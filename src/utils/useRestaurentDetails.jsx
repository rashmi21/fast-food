import { useEffect, useState } from "react";
import { RESTAURENT_URL } from "./constant";
import { resDetails } from "./mockData";

const useRestaurentDetails = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurentDetails();
  }, []);

  const fetchRestaurentDetails = async () => {
    // Facing CORS issue so using mock data for restaurent details
    // const newLink = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId="+resId;
    // const resData = await fetch(newLink);

    // const jsonData = await resData?.json();
    setResInfo(resDetails);
  };

  return resInfo;
};

export default useRestaurentDetails;
