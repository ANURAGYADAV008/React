import { useState,useEffect } from "react";
const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    //check if online amd then return online status
    useEffect(()=>{//whatever you write inside will render only once
      window.addEventListener("offline",()=>{
        setOnlineStatus(false);

      })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })


    },[])

    return onlineStatus;

}
export default useOnlineStatus;