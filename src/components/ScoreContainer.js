import React from "react";
import Navbar from "./Navbar";
// import Counter from "./Counter";
import catPhotos from "../catPhotos.json";
import Header from "./Header";
import ImagesContainer from "./ImagesContainer";

class ScoreContainer extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    catPhotos: catPhotos
  }

  // handleIncrement increases this.state.count by 1
  // handleIncrement = () => {
  //   this.setState({ score: this.state.score + 1 });
  // }

  handleClick = () => {
    this.setState({ catPhotos: this.shuffle(catPhotos)})
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <ImagesContainer
          catPhotos={this.state.catPhotos} 
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default ScoreContainer;