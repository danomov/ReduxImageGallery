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
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAdd = () => {
        this.props.handleAdd(this.state.input1, this.state.input2)
    }

    render() {
        return (
            <React.Fragment>
            <Link to='/' style={{color: 'black', textDecoration: 'none'}}><h1 style={{fontFamily: "'Great Vibes', cursive"}}>Danomov Gallery</h1></Link>            
            <form style={{marginTop: '50px'}} className='Add image' onSubmit={(e) => {e.preventDefault(); e.target.reset()}}>
            <TextField variant="outlined" margin="normal" label="LINK" name='input1' onChange={this.onChange} type='text' placeholder='Image Link'/>
            <br/>
            <TextField variant="outlined" margin="normal" label="DESCRIPTION" name='input2' onChange={this.onChange} type='text' placeholder='Image Description'/>
            <br/>
            <Button style={{marginTop: '20px'}} variant='contained' color='secondary' type='submit' onClick={this.handleAdd}>Add</Button>
            </form>
            <Link to='/'><Button style={{marginTop: '50px'}} variant='contained' color='primary'>Back</Button></Link>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAdd: (inp1, inp2) => {
            dispatch(addImage(inp1, inp2));
        }
    };
};


export default connect(null, mapDispatchToProps)(AddImage);
