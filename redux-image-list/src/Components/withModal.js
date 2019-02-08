import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ImageList from './ImageList';

  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });
  
  class ImageListWithModal extends React.Component {
    state = {
      open: false,
      image: '',
    };
  
    handleOpen = (src) => {
      this.setState({ open: true, image: src });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;

      return (
        <div>
          <ImageList handleOpen={this.handleOpen}/>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            style={{margin: '0 auto'}}>
            <div style={getModalStyle()} className={classes.paper}>
              <img onClick={this.handleClose} alt='modalImage' style={{height: '100%', width: '100%'}} src={this.state.image}/>
            </div>
           </Modal>
        </div>
      );
    }
  }
  
  ImageListWithModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const ModalWrappedImageList = withStyles(styles)(ImageListWithModal);
  
  export default ModalWrappedImageList;