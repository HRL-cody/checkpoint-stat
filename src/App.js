import React from "react";
import MediaCard from "./components/MediaCard"
import imageUrl from './components/Assets/img1.jpg'
import "./App.css";



class App extends React.Component {
  state = {
    fullName: "Hamouda Mdemagh",
    Bio:
      "i'm hamouda 31 years old musician, now i've just started a new journey to become a web developper this is seems to be though for now but i know that only by working so hard i'll be good at web dev",
    profession: "Musician",
    image: imageUrl,
    display: false,
  };

  handleClick = () => {
    // console.log("hello")

    this.setState({
      display: !this.state.display
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <MediaCard
          display={this.state.display}
          handleClick={this.handleClick}
            fullName={this.state.fullName}
            Bio={this.state.Bio}
            profession={this.state.profession}
            image={this.state.image}
          />
        </div>
      </div>
    );
  }
}

export default App;
