import React from 'react';
import { connect } from 'react-redux';
import { addImage } from '../Redux/Actions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

class AddImage extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            input1: '',
            input2: '',
            imageError: '',
            textError: '',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({imageError: nextProps.error.image, textError: nextProps.error.text})
    }
    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAdd = () => {
        this.props.handleAdd(this.state.input1, this.state.input2)
    }

    handleNightMode = () => {
        localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); 
        localStorage.getItem('mode') === 'dark' ? 
        document.querySelector('body').classList.add('dark') 
        : document.querySelector('body').classList.remove('dark')
    }

    render() {
        return (
            <React.Fragment>
            <Link to='/' style={{color: 'black', textDecoration: 'none'}}><h1 style={{fontFamily: "'Great Vibes', cursive"}}>Danomov Gallery</h1></Link>            
            <form style={{marginTop: '50px'}} className='Add image' onSubmit={(e) => {e.preventDefault()}}>
            <label className="switch">
            <input type="checkbox" onClick={this.handleNightMode}/>
            <span className="slider round"></span>
            </label>
            <br/>
            <TextField variant="outlined" margin="normal" label="LINK" name='input1' onChange={this.onChange} type='text' placeholder='Image Link'/>
            <p style={{color: 'red'}}>{this.state.imageError ? this.state.imageError[0] : ''}</p>
            <TextField variant="outlined" margin="normal" label="DESCRIPTION" name='input2' onChange={this.onChange} type='text' placeholder='Image Description'/>
            <p style={{color: 'red'}}>{this.state.textError ? this.state.textError[0] : ''}</p>
            <Button style={{marginTop: '20px'}} variant='contained' color='secondary' type='submit' onClick={this.handleAdd}>Add</Button>
            </form>
            <Link to='/'><Button style={{marginTop: '50px'}} variant='contained' color='primary'>Back</Button></Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.errorText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (inp1, inp2) => {
            dispatch(addImage(inp1, inp2));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
