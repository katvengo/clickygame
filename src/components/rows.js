import React from 'react';
import Card from './Card/card'
import michael from "../michael.json"
import Navbar from "./navbar"
import Hero from "./hero"

var totalScores = []

class Rows extends React.Component {
    state = { 
        cards: michael,
        count: 0,
        highestScore: 0,
        clicked: false
     }
     //Doesn't work
     //alerts the user when they win the game 
     checkForWinner = () => {
       if(this.state.count === 12) {
         alert("You win! Click ok to play again")
       }
     }


     handleCount = () => {
        this.setState({ count: this.state.count + 1 });
      };

 resetData = () => {
   const cards = this.state.cards.map( card => ({...card, clicked: false}))
  this.setState({
    cards
  })

   };

      resetGame = () => {
        this.setState({count: 0})
      }
    
       arrayNum = array => {
        return Math.max(...array)
        }

    showHighestScore = () => {   
     this.setState({
       highestScore: this.state.highestScore
     })
    }      

    handleClickEvent = event => {
      event.preventDefault()
      const findId = this.state.cards.find(imageObject => imageObject.image === event.target.src)
    if (findId.clicked === false){
      this.handleCount()
      this.checkForWinner()
      console.log(this.state.count)
      findId.clicked = true
      this.shuffledArray(this.state.cards)
    } else if (findId.clicked === true){
      alert("Incorrect Answer!")
      this.resetData()
      var score = this.state.count
      totalScores.push(score)
      console.log("highest score" + this.arrayNum(totalScores))
      this.showHighestScore()
      this.resetGame()
      this.shuffledArray(this.state.cards)
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
          highestScore={this.state.highestScore}
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


//I need to keep track of all of the scores and only output the highest score
//state => Need a totalScores: [] array. Before the game resets push the count number
//into the totalScores array. Then use a function to figure out the highest number (go to code challenges for options)


