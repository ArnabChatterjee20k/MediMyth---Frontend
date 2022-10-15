
import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNotificationContext } from '../../contexts/ToastContextProvider/NotificationContextProvider';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Toast = () => {
    const {open,content,status,handleClose} = useNotificationContext()
    return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{horizontal:"right",vertical:"top"}}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {content}
        </Alert>
      </Snackbar>
  )
}

export default Toast