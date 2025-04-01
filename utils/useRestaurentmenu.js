import { useEffect, useState } from "react";
const useRestaurentMenu=(resId)=>{
   const [resInfo,setResInfo]=useState(null);
  useEffect(()=>{
    fetchData();
  },[])

const fetchData=async()=>{
    const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json= await data.json();
    console.log(json)
    setResInfo(json);

}
  return resInfo;
}
export default useRestaurentMenu;