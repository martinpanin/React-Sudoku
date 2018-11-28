import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';



function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class FrontPage extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button className='front-btn' variant="outlined" color="secondary"  onClick={() => {document.querySelector("header").style.display = "none";document.querySelector("main").style.display = "flex";}}>Start the Game</Button>
                <Button className='front-btn' variant="outlined" color="secondary" onClick={this.handleOpen}>How to</Button>
                <Button className='front-btn' variant="outlined" color="secondary" href='mailto:martin.panin.official@gmail.com'>Contact me</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            How to play
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            <p>I hope you know the basic rules. Only <strong>one</strong> number per <strong>row, column and square</strong>.</p>
                            <p>Select the number you want to insert. Then click the cell you want to insert it.</p>

                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

FrontPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const HowToWrapped = withStyles(styles)(FrontPage);

export default HowToWrapped;