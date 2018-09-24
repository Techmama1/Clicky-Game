import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";



class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props){
    super(props);
    this.state = {
      picks : [],
      friends,
      currentScore: 0,
      topScore: 0,
      rightWrong: "",
      clicked: [],
    };
  
  }
 
 
  
  selectCharacter( id ) {
    
  let friends = this.state.friends.sort(function() { return 0.5 - Math.random() });
    
     this.setState({
       picks : [...this.state.picks, id],
       friends
     }
     ) 
     this.checkInput(id);
   }

   checkInput( id ){
      if(this.state.picks.includes(id)){
        alert('you lose');
        this.setState({currentScore : 0});
      } else {
        this.setState({
          currentScore: this.state.currentScore + 1
        })
      }
   }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar currentScore = {this.state.currentScore} topScore={this.state.topScore}/>
        <Title>The Jetson's Clicky-Game!</Title>
       
        {this.state.friends.map(friend => (
          <FriendCard
            selectCharacter = {this.selectCharacter.bind(this)}
            id={friend.id}
            key={friend.id}
            image={friend.image} 
          />  
        ))}
      </Wrapper>
    );
  }
}

export default App;
