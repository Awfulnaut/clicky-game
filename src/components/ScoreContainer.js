import React from "react";
import Navbar from "./Navbar";
// import Counter from "./Counter";
import Header from "./Header";
import ImagesContainer from "./ImagesContainer";

class ScoreContainer extends React.Component {
  state = {
    score: 0,
    topScore: 0
  }

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <ImagesContainer />
      </div>
    )
  }
}

export default ScoreContainer;