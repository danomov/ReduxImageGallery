import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { getList, deleteImage } from '../Redux/Actions';
import CircularProgress from '@material-ui/core/CircularProgress';

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

    componentDidMount(){
        this.props.handleFetch();
    }    

    handleDelete = (id) => {
        this.props.handleDelete(id);
    }

    render(){
    const { classes } = this.props;
    const { spacing } = this.state;


        return (
            <React.Fragment>
            <Link to='/' style={{color: 'black', textDecoration: 'none'}}><h1 className='h1' style={{fontFamily: "'Great Vibes', cursive"}}>Danomov Gallery</h1></Link>
            <Link to='/new'><Button variant='contained' color='primary' style={{marginTop: '50px', marginBottom: '50px'}}>New image</Button></Link>
            {!this.props.imageList.isLoading ?
            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    {this.props.imageList.data.map((element, index) => {
                    return (
                    <Grid key={index} item>
                      <Paper id='paper' onClick={() => {this.props.handleOpen(element.image)}} style={{height: '370px', width: 'auto'}} className={classes.paper}>
                      <img style={{height: '300px'}} alt='images' src={element.image}/>
                      <p style={{fontFamily: "'Playfair Display SC', serif"}}>{element.text}</p>
                      </Paper>
                      <Link to={`/edit/${element.id}`} style={{color: 'black', textDecoration: 'none'}}><Button variant='contained' color='primary' style={{marginTop: '10px', marginBottom: '50px'}}>Edit image</Button></Link>
                      <Button onClick={(e) => this.handleDelete(e.target.getAttribute('index'))} index={element.id} variant='contained' color='secondary' style={{marginTop: '10px', marginLeft: '10px', marginBottom: '50px'}}>Delete image</Button>
                    </Grid>
                    )})}
                </Grid>
              </Grid>
            </Grid>
            : <h1>Loading <CircularProgress color='secondary'/></h1>}
            </React.Fragment>
        )
    }
}

ImageList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        imageList: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFetch: () => {
            dispatch(getList());
        },
        handleDelete: (id) => {
            dispatch(deleteImage(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ImageList));
