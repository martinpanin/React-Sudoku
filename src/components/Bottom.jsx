import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';

export default class Bottom extends Component {

    render() {
        const handleToUpdate = this.props.handleToUpdate;

        return (
         <div>
             <Fab color="primary" onClick={() => handleToUpdate('1')} aria-label="1">1</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('2')} aria-label="2" >2</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('3')} aria-label="3" >3</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('4')} aria-label="4" >4</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('5')} aria-label="5" >5</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('6')} aria-label="6" >6</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('7')} aria-label="7" >7</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('8')} aria-label="8" >8</Fab>
             <Fab color="primary" onClick={() => handleToUpdate('9')} aria-label="9" >9</Fab>
         </div>
        );

    }
};
