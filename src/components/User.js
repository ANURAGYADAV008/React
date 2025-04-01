import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        
        // Correctly initializing state (if needed)
        this.state = {
            name: "JAY Yadav",
            location:"Uttar Pradesh",
            age:19,
            count:0
        };
    }

    render() {
        const {name,age,location}=this.state;
        const {count}=this.state;
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.location}</h4>
                <h4>{this.props.age}</h4>

                <h4>{name}</h4>
                <button onClick={()=>{
                    this.setState({name:"Anurag"})
                    this.setState({location:"Pakhrauli"})
                    this.setState({count:this.state.count+1})
                    
                }}>Click</button>
                <h4>{age}</h4>
                <h4>{location}</h4>
                <h1>{count}</h1>
            </div>
        );
    }
}

export default UserClass;
