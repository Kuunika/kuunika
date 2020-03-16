import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { State } from '../../services/utils/@types';
import { useSelector } from 'react-redux';

function Notification() {
  const error = useSelector((state: State) => state.errors.error.message);
  return (
    <>
      {error.length > 0 && (
        <Paper>
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => {
                  location.reload();
                }}
              >
                Refresh
              </Button>
            }
          >
            {error}
          </Alert>
        </Paper>
      )}
    </>
  );
}

export default Notification;
