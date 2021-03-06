import PropTypes from 'prop-types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function SolutionDialog({
  open,
  onClose,
  name,
  text,
  fullText
}) {
  const smScreen = useMediaQuery('(max-width:600px)');

  return (
    <Dialog
      fullScreen={smScreen}
      maxWidth='md'
      open={open}
      onClose={onClose}
    >
      <DialogTitle align='center'>{name}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText align='center'>
          {text}
        </DialogContentText>
        <DialogContentText align='center'>
          {fullText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SolutionDialog.propTypes = {
  open:     PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
  name:     PropTypes.string.isRequired,
  text:     PropTypes.string.isRequired,
  fullText: PropTypes.string.isRequired
};

export default SolutionDialog;
