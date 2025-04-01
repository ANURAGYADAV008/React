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

  return (
    <div className="Restaurent">
      <div className="restaurent-details">
        <h1>{resInfo?.data?.cards?.[0]?.card?.card?.text}</h1>
        <h3>{resInfo?.data?.cards?.[2]?.card?.card?.info?.city}</h3>
        <h3>RS {resInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwo / 100} For Two</h3>
        <hr className="straight-Line"></hr>
      </div>
      <h2 style={{ color: "orange" }}>Menu</h2>
      <hr className="straight-Line"></hr>
      <div className="menu-List">
        {resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
          (item) => (
            <div key={item?.card?.info?.id} className="menu-card">
              <h4 style={{ color: "orange" }}>{item?.card?.info?.name}</h4>
              <div className="menu-image-container">
                <img
                  style={{ width: "150px", height: "150px", borderRadius: "5px" }}
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                  alt="menu-item"
                  className="menu-image"
                ></img>
              </div>
              <h5>Rating-{item?.card?.info?.avgRating} stars</h5>
              <h5 style={{ fontSize: "20px" }}>
                Price-{item?.card?.info?.defaultPrice / 100}
              </h5>
              <p>{item?.card?.info?.description}</p>
              <hr className="straight-Line"></hr>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;