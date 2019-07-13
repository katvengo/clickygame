import React from 'react';
import Card from './Card/card'
import michael from "../michael.json"
import Navbar from "./navbar"
import Hero from "./hero"

class Rows extends React.Component {
    state = { 
        michael: '',
        count: 0,
        imageClicked: []
     }
     

     handleCount = () => {
        this.setState({ count: this.state.count + 1 });
      };


      resetGame = () => {
        this.setState({count: 0})
      }
    
    handleClickEvent = event => {
       console.log('Is this going to show up?');
       event.preventDefault()
     //Add find to figure out which id is being clicked
    const findId = michael.find(imageObject => imageObject.image === event.target.src)
    if (findId.clicked === false){
      this.handleCount()
      console.log(this.state.count)
      findId.clicked = true
      this.shuffledArray(michael)
    } else if (findId.clicked === true){
      alert("Incorrect Answer!")
      this.resetGame()
      michael.forEach(() => michael.clicked = false)
      this.shuffledArray(michael)
    }
    return 
   }


     shuffledArray = array => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }


    render() { 
        return ( 
            <>

        <Navbar 
          count={this.state.count} 
          />
        <Hero />
        <div className ="container is-fluid">
        <div className ="columns is-centered is-multiline">
  
        {this.shuffledArray(michael).map(michael => ( 
        <div className ="column" key={michael.id}>
            <Card 
            id={michael.id}
            image={michael.image}
            onClick={this.handleClickEvent}
            />
            
            </div>
            ))}
            </div>
        </div>
        </>
);
    }
}

export default Rows;

//Almost there!! 
//I have to reset all michael.clicked to false so that the game doesn't give incorrect answer
//when it restarts (using a forEach? on the boolean values i assume)

//I need to keep track of all of the scores and only output the highest score
//state => Need a totalScores: [] array. Before the game resets push the count number
//into the totalScores array. Then use a function to figure out the highest number (go to code challenges for options)

//Display an alert when a user gets a total score of 12 

//Set up Heroku and deploy site 

