import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.83730&lng=80.91650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const json = await response.json();
      const restaurantList =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  if (!onlineStatus) {
    return <h1>❌ You are offline. Please check your internet connection.</h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search items"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              if (!searchText.trim()) {
                setFilteredRestaurants(restaurants);
              } else {
                const filteredRes = restaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRes);
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restaurants.filter((res) => res.info.avgRating > 4.2);
            setFilteredRestaurants(filtered);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
