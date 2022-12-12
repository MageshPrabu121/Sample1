import React from "react";
class Bike extends React.Component{
  constructor(props){
    super(props);
    this.state={
      brand: "Yamaha",
      model: "Rx-100",
      paint: "Black",
      year: 1987
    };
  }
changePaint=()=>{
  this.setState({paint:"Red"})
}
  render(){
    return(
      <div>
        <h1>My- {this.state.brand}</h1>
        <p>
          It is {this.state.model}&nbsp; and the color is {this.state.paint} &nbsp;
          Manufactured year is {this.state.year}.  
        </p>
        <button type="button"onClick={this.changePaint}>Change Paint</button>
      </div>
    );
  }
}
export default Bike;