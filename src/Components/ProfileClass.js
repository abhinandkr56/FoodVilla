import React from "react";
import UserContext from "../utils/UserContext";
class Profile extends React.Component{
    constructor(){
        super();
        this.state =  {count : 1, count2 : 0}
    }
    componentDidMount(){
        console.log("Component did mount");
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        console.log("Component rendered");
        return(
            <>
             <h1>Profile</h1>
             <h2>{this.props.name}</h2>
             <p>{this.state.count}</p>
             <p>count2 : {this.state.count2}</p>
             <button onClick={() =>{
                this.setState({
                    count : this.state.count+2,
                    count2 : this.state.count % 10 == 1 ?  this.state.count2+1 : this.state.count2
                });
             }} className="border border-black">Increment</button>

            <UserContext.Consumer>
                {(val) => <p>{"name from context is: " +val.name}</p>}
            </UserContext.Consumer>
            </>
           
        )
    }
}

export default Profile;