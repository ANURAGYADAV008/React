import React from "react";
import User from "./User";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div>
                <h5>{this.props.name}</h5>
                <h5>{this.props.Location}</h5>
                <h5>{this.props.age}</h5>
        </div>
        )
    }
}
export default UserClass;