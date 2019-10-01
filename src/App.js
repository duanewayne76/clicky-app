import React from 'react';
import Nav from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import './App.css';
import Card from './components/Cards/Card';
import options from "./options.json";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      feedback: "Click an image to begin!",
      score: 0,
      highScore: 0,
      cards: options,
      youWon: false
    }
    this.selections = [
    ]
  }

  clicked = (id) => {
    console.log(id);
    const cards = shuffle(this.state.cards)

    if (this.selections.includes(id)) {
      this.setState({
        feedback: "You guessed incorrectly!",
        score: 0,
        cards: cards,
        youWon: false

      })
      this.selections = []
      return
    }
    this.selections.push(id)
    this.setState({
      feedback: "You guessed correctly!",
      score: this.selections.length,
      highScore: (this.selections.length > this.state.highScore ? (this.state.highScore + 1) : this.state.highScore),
      cards: cards,
      youWon: (this.selections.length === cards.length)
    })
  }

  render() {
    const cards = this.state.cards.map(card => (
      <Card key={card.id} name={card.name} onClick={() => { this.clicked(card.id) }} image={card.image} />
    ))
  
     
    
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} feedback={this.state.feedback} />
        <Header />
        <div className="cards">{cards}</div>
      </div>
    );
  }

}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default App;
