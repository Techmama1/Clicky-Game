import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props){
    super(props);
    this.state = {
      picks : [],
      friends
    };
  
  }
 
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  
  selectCharacter( id ) {
    
    let friends = this.state.friends.sort(function() { return 0.5 - Math.random() });
    
    this.setState({
      picks : [...this.state.picks, id],
      friends
    }
    )
    
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <p>{this.state.picks}</p>
        {this.state.friends.map(friend => (
          <FriendCard
            selectCharacter = {this.selectCharacter.bind(this)}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
