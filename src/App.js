import React, { Component } from 'react';
import './css/App.css';
import initBoard from "./js/sudoku";
import Logo from './components/Logo';
import Bottom from "./components/Bottom";
import SudokuBoard from './components/SudokuBoard';
import HowTo from './components/FrontPage';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextClick: null
        };
    };

    handleToUpdate(nextNum){
        this.setState({nextClick:nextNum});
    }
  render() {
      var	handleToUpdate	=	this.handleToUpdate;
    return (
    <React.Fragment>
        <header>
            <h1>Simple Sudoku App</h1>
            <HowTo />
            <Logo />
        </header>

        <main>
            <Logo />
            <SudokuBoard nextClick={this.state.nextClick}/>
            <footer>
                <Bottom nextClick={this.state.nextClick} handleToUpdate={handleToUpdate.bind(this)} />
            </footer>
        </main>
     </React.Fragment>
    );
  }
}

export default App;
