import React from "react";
import Navbar from "./Navbar";
import catPhotos from "../catPhotos.json";
import Header from "./Header";
import ImagesContainer from "./ImagesContainer";

class ScoreContainer extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    photos: [...catPhotos]
  }

  handleClick = id => {
    let guessedCorrectly = false;
    const updatedCats = this.state.photos.map(element => {
      const newCat = {...element};
      if(newCat.id === id && !newCat.clicked) {
        newCat.clicked = true;
        guessedCorrectly = true;
      };
      return newCat;
    });
    guessedCorrectly
      ? this.handleWin(updatedCats)
      : this.handleLose();
  };
  
  handleWin = updatedCats => {
    const score = this.state.score + 1;
    let highScore = this.state.highScore;
    if(score > highScore) {
      highScore = score;
    };
    this.setState({
      photos: this.shuffle(updatedCats),
      score,
      highScore
    });
  };
  
  handleLose = () => {
    this.setState({
      score: 0,
      photos: [...catPhotos]
    })
  };
  

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
          highScore={this.state.highScore}
        />
        <Header />
        <ImagesContainer
          catPhotos={this.state.photos} 
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default ScoreContainer;