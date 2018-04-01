import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

export default class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    error: null,
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.error) {
      return { open: true };
    }
    return null;
  }

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { error } = this.props;

    if (!error) return null;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message={<span id="message-id">{error.message}</span>}
        action={
          <IconButton color="inherit" onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />
    );
  }
}
