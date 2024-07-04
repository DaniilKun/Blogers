import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  borderRadius:'20px',
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const StyledCheckCircleIcon = styled(CheckCircleIcon)(({ theme }) => ({
  fontSize: 50,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));

export default function MainModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained"
        color="primary"
        sx={{ marginTop: 1, borderRadius: '10px', textTransform: 'none' }}
        endIcon={<ArrowForwardIcon />}
        onClick={handleClickOpen}>
        Свяжитесь со мной
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            borderRadius: 20,
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent  sx={{ textAlign: 'center' }}>
          <StyledCheckCircleIcon />
          <Typography variant="h6" gutterBottom>
            Спасибо за обращение
          </Typography>
          <Typography variant='body2'>
            Менеджер свяжется с вами в ближайшее время.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose}>
            ГОТОВО
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}