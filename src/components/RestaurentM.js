import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../../utils/useRestaurentmenu";


const RestaurentMenu = () => {
const { resId } = useParams(); // Get restaurant ID from URL
const resInfo= useRestaurentMenu(231204);


  if (!resInfo) {
    return <Shimmer />;
  }
 const text=resInfo?.data?.cards?.[0]?.card?.card?.text;
 const city=resInfo?.data?.cards?.[2]?.card?.card?.info?.city;
 const rating=resInfo?.data?.cards?.[2]?.card?.card?.info?.avgRating;
 const cost=resInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwo;
 const menu=resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;
  return (
    <div className="Restaurent">
      <div className="restaurent-details">
        <h1>{text}</h1>
        <h3>{city}</h3>
        <h3>RS {cost/100} For Two</h3>
        <hr className="straight-Line"></hr>
      </div>
      <h2 style={{ color: "orange" }}>Menu</h2>
      <hr className="straight-Line"></hr>
      <div className="menu-List">
        {menu?.map(
          (item) => (
            <div key={item?.card?.info?.id} className="menu-card">
             <div className="mcard-detail">
             <h4 style={{ color: "orange" }}>{item?.card?.info?.name}</h4>
              <h5>Rating-{item?.card?.info?.Rating} stars</h5>
              <h5 style={{ fontSize: "20px", fontFamily:"inherit"}}>
                Price-{item?.card?.info?.defaultPrice / 100}Rs
              </h5>
              <p className="info-det">{item?.card?.info?.description}</p>
              <hr className="straight-Line"></hr>
             </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;