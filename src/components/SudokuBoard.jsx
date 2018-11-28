import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Button from '@material-ui/core/Button';

export default class  SudokuBoard extends Component {

    handleChange(event) {
        document.getElementById(event.target.id).innerText = this.props.nextClick;
        console.log(event.target.id);
    }
    render() {
        return (
            <React.Fragment>
                <section className='sudoku-board'>
                    <Grid container spacing={16}>
                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id1' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id2' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id3' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id4' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id5' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id6' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id7' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id8' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id9' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id10' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id11' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id12' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id13' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id14' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id15' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id16' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id17' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id18' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id19' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id20' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id21' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id22' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id23' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id24' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id25' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id26' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id27' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*Second row*/}

                    <Grid container spacing={16}>
                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id28' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id29' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id30' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id31' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id32' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id33' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id34' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id35' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id36' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id37' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id38' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id39' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id40' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id41' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id42' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id43' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id44' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id45' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id46' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id47' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id48' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id49' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id50' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id51' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id52' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id53' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id54' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={16}>
                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id55' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id56' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id57' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id58' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id59' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id60' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id61' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id62' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id63' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id64' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id65' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id66' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id67' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id68' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id69' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id70' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id71' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id72' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid style={{paddingBottom: 20}} item>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id73' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id74' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id75' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id76' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id77' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id78' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={8}>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id79' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id80' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                                <Grid item lg>
                                    <Button className='cell' color="default" onClick={this.handleChange.bind(this)} id='id81' variant="contained"
                                            size="medium"> </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </section>
            </React.Fragment>
        );
    }
}