import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function Header() {
  const currentLink = useSelector((state: RootState) => state.currentLink.link);

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}>
          {currentLink}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <IconButton>
            <Badge color="secondary" badgeContent={1000} max={999}>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Typography>Name</Typography>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 46, height: 46 }}
            />
          </Box>

          <IconButton>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {/* <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}></Toolbar> */}
    </>
  );
}
