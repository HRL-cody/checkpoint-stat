import React from "react";

class MediaCard extends React.Component {
    Timer = () => {
    let I = new Date();
    let J = I.toLocaleTimeString();
    document.getElementById("settime").innerHTML = J;
    };
    componentDidMount = () => {
    let Time = setInterval(this.Timer, 1000);
    return Time;
    };
    render() {
    return (
        <div>
        <div>
        <span id="settime">time when started</span>
        </div>
        <button onClick={this.props.handleClick}>Toggle</button>
        {this.props.display === true ? (
        <div>
            <h2>{this.props.fullName}</h2>
            <h3>{this.props.profession}</h3>
            <p>{this.props.Bio}</p>
            <img src={this.props.image} alt="Hamouda"/>
            
        </div>
        ) : null}
    </div>
    );
    }
}
export default MediaCard;
