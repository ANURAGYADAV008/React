import img from "../../images/company.jpg";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header=()=>{
  const [btnNameReact,setbtnNameReact]=useState("Login");
  const [status,setStatus]=useState()
  const onlineStatus=useOnlineStatus();
    
   return(
    <div className="header">
        <div className="logo-container">
        <img  className ="logo" src={img} alt="images"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li>Cart</li>

                <button className="log-btn" onClick={()=>{ btnNameReact==="Login"?setbtnNameReact("LogOut"):setbtnNameReact("Login");}}>{btnNameReact}</button>
            </ul>
        </div>


    </div>
   )
}
export default Header;