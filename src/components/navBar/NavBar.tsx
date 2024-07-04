import {useEffect, useState,} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SelectBrand from './SelectBrand';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaymentIcon from '@mui/icons-material/Payment';
import TelegramIcon from '@mui/icons-material/Telegram';
import SosIcon from '@mui/icons-material/Sos';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentLink } from '../../redux/currentLink/currentLinkSlice';
// import { RootState } from '../../redux/store';

const style={ textDecoration: 'none', color: 'inherit' }

const pages = [
  { index: 0, name: 'Главная', path: '/' },
  { index: 1, name: 'Мои магазины', path: '/my_shops' },
  { index: 2, name: 'Мои товары', path: '/my_products' },
  { index: 3, name: 'Блогеры', path: '/blogers' },
  { index: 4, name: 'Статистика', path: '/statistics' },
  { index: 5, name: 'Как выбрать блогера', path: '/choose_blogger' },
  { index: 6, name: 'Рекламный бюджет', path: '/budget' },
  { index: 7, name: 'Телеграм бот', path: '/telegram' },
  { index: 8, name: 'Помощь', path: '/help' },
];

export default function SelectedListItem() {
  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const currentLink = useSelector((state: RootState) => state.currentLink.link);

  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const page = pages.find(p => p.path === location.pathname);
    return page ? page.index : 0;
  });
  
  useEffect(() => {
    const page = pages.find(p => p.path === location.pathname);
    if (page) {
      setSelectedIndex(page.index);
      dispatch(setCurrentLink(page.name));
    }
  }, [location.pathname, dispatch]);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    const page = pages.find(p => p.index === index);
    if (page) {
      dispatch(setCurrentLink(page.name));
    }
  };
// console.log(currentLink);

  return (
    <Box sx={{ width: '100%', maxWidth: 270, bgcolor: 'background.paper' }}>
      <List >
        <Link to={'/'} style={style}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            sx={{ mt: 1 }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItemButton>
        </Link>

        <Link to={'my_shops'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemIcon>
              <AddBusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Мои магазины" />
          </ListItemButton>
        </Link>
        <SelectBrand />

        <Link to={'my_products'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText primary="Мои товары" />
          </ListItemButton>
        </Link>
        <Link to={'blogers'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Блогеры" />
          </ListItemButton>
        </Link>
        <Link to={'statistics'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon>
              <QueryStatsIcon />
            </ListItemIcon>
            <ListItemText primary="Статистика" />
          </ListItemButton>
        </Link>
        <Link to={'choose_blogger'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}>
            <ListItemIcon>
              <PsychologyIcon />
            </ListItemIcon>
            <ListItemText primary="Как выбрать блогера" />
          </ListItemButton>
        </Link>
        <Link to={'budget'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Рекламный бюджет" secondary="Остаток 2131 охватов" />
          </ListItemButton>
        </Link>
        <Link to={'telegram'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}>
            <ListItemIcon>
              <TelegramIcon />
            </ListItemIcon>
            <ListItemText primary="Телеграм бот" secondary="Бот не подключен" />
          </ListItemButton>
        </Link>
        <Link to={'help'} style={style}>
          <ListItemButton
            sx={{ mt: 1 }}
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}>
            <ListItemIcon>
              <SosIcon />
            </ListItemIcon>
            <ListItemText primary="Помощь" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
}
