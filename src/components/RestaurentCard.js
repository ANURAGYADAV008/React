
const RestaurentCard=(props)=>{
    const {resdata}=props;
    return(
        <div className="res-card" >
            <img  className="food-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.info.cloudinaryImageId}`} alt="image"></img>
            <h5>{resdata.info.name}</h5>
            <h5>{resdata.info.areaName}</h5>
            <h5>{resdata.info.avgRating} ⭐rating</h5>
            <h5>Delivery in {resdata.info.sla.deliveryTime} min</h5>
            <h5>{resdata.info.costForTwo}</h5>
            
        </div>
    )
}
export default RestaurentCard;