import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export default function ResponsiveDialog({ openTaskModal, setOpenTaskModal, setData, data}) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('')
  const [traderName, setTraderName] = useState('')
  const [traderEmail, setTraderEmail] = useState('')
  const [status, setStatus] = useState('');
  const [mDate, setMDate] = useState('')

  const formatDate = (date) => {
    let dateNow = new Date(date)
    let day = dateNow.getDate()
    let month = dateNow.getMonth() + 1;
    let year = dateNow.getFullYear()

    return `${day}-${month}-${year}`
  }

  

  const formSubmitHandler = (event) => {
    event.preventDefault()

    const collectedData = {
        'name': name,
        'trader name': traderName,
        'trader email': traderEmail,
        'status': status,
        'maturity date': formatDate(mDate)
    }

    setData(data?.push(collectedData))
    setOpenTaskModal(!openTaskModal)
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openTaskModal}
        onClose={setOpenTaskModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add New Task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your task details!
          </DialogContentText>
          <form onSubmit={formSubmitHandler}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                required
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                margin="dense"
                id="traderName"
                label="Trader Name"
                type="text"
                fullWidth
                variant="standard"
                required
                value={traderName}
                onChange={e => setTraderName(e.target.value)}
            />
            <TextField
                margin="dense"
                id="traderEmail"
                label="Trader Email"
                type="email"
                fullWidth
                variant="standard"
                required
                value={traderEmail}
                onChange={e => setTraderEmail(e.target.value)}
            />
            <FormControl variant='standard' fullWidth required>
                <InputLabel id="status-select">Status</InputLabel>
                <Select
                    labelId="status-select"
                    id="status-select"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    label="Status"
                    required
                >
                    <MenuItem value='filled'>Filled</MenuItem>
                    <MenuItem value='Partially filled'>Partially Filled</MenuItem>
                    <MenuItem value='open'>Open</MenuItem>
                </Select>
            </FormControl>
            <TextField
                margin="dense"
                id="maturityDate"
                type="date"
                fullWidth
                variant="standard"
                required
                value={mDate}
                onChange={e => setMDate(e.target.value)}
            />
            <Button 
                type='submit'
                sx={{ backgroundColor: 'blue', color: 'white', '&:hover': { backgroundColor: 'darkblue'}}}
            >
                Create Task
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            autoFocus 
            onClick={() => setOpenTaskModal(!openTaskModal)}
            sx={{ 
                backgroundColor: '#FF5733', 
                color: 'white',
                '&:hover': {
                    backgroundColor: '#C70039'
                }
            }}
          >
            Cancel task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
