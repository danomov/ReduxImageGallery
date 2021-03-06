import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { getList, deleteImage } from '../../Redux/Actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Redirect from 'react-router-dom/Redirect';

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
            redirect: false,
        }
    }

    componentDidMount(){
        this.props.handleFetch();
    }  
    
    handleLogOut = () => {
        localStorage.removeItem('token');
        this.setState({redirect: true})
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/'/>;
        }
    }

    handleDelete = (id) => {
        this.props.handleDelete(id);
    }

    handleNightMode = () => {
        localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); 
        localStorage.getItem('mode') === 'dark' ? 
        document.querySelector('body').classList.add('dark') :
        document.querySelector('body').classList.remove('dark')
    }

    render(){
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <React.Fragment>
        {this.renderRedirect()}
        <Link to='/' style={{color: 'black', textDecoration: 'none'}}><h1 className='h1' style={{fontFamily: "'Great Vibes', cursive"}}>Danomov Gallery</h1></Link>
        <Button onClick={this.handleLogOut} variant='contained' color='primary' style={{marginTop: '50px', marginBottom: '30px'}}>Log Out</Button><br/>
        <Link to='/admin/new'><Button variant='contained' color='primary' style={{marginTop: '50px', marginBottom: '50px', marginRight: '10px'}}>New image</Button></Link> 
        <label className="switch">
        <input type="checkbox" onClick={this.handleNightMode}/>
        <span className="slider round"></span>
        </label>
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
                  <Link to={`/admin/edit/${element.id}`} style={{color: 'black', textDecoration: 'none'}}><Button variant='contained' color='primary' style={{marginTop: '10px', marginBottom: '50px'}}>Edit image</Button></Link>
                  <Button onClick={(e) => this.handleDelete(e.target.getAttribute('index'))} index={element.id} variant='contained' color='secondary' style={{marginTop: '10px', marginLeft: '10px', marginBottom: '50px'}}>Delete image</Button>
                </Grid>
                )})}
            </Grid>
          </Grid>
        </Grid>
        : <h1>Loading <CircularProgress color='secondary'/></h1>}
        </React.Fragment>
    )}
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
