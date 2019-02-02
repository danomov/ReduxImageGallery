import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class ImageList extends React.PureComponent {
constructor(props){
    super(props)
    this.state = {
        spacing: '16',
    }
}
    render(){
    const { classes } = this.props;
    const { spacing } = this.state;

        return (
            <React.Fragment>
            <h1 style={{fontFamily: "'Great Vibes', cursive"}}>Danomov Gallery</h1>
            <Link to='/new'><Button variant='contained' color='primary' style={{marginTop: '50px', marginBottom: '50px'}}>NEW IMAGE</Button></Link>
            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    {this.props.imageList.map((element, index) => {
                    return (
                    <Grid key={index} item>
                      <Paper style={{height: '370px', width: 'auto'}} className={classes.paper}>
                      <img style={{height: '300px'}} alt='images' src={element.image}/>
                      <p style={{fontFamily: "'Playfair Display SC', serif"}}>{element.text}</p>
                      </Paper>
                    </Grid>
                    )})}
                </Grid>
              </Grid>
            </Grid>
            </React.Fragment>
        )
    }
}

ImageList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        imageList: state
    };
};


export default connect(mapStateToProps)(withStyles(styles)(ImageList));
