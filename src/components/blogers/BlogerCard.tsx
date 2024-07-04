import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Divider, List } from '@mui/material';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function BlogerCard() {
  return (
    <Card sx={{ maxWidth: 300, textAlign: 'center',p:2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
      </Box>
      <CardContent>
        <Stack direction="column" alignItems="center">
          <Typography variant="h6">Имя Фамилия</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            @mail.ru
          </Typography>
        </Stack>
        <List sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between',mt:2 }}>
            <Typography>Подписчики:</Typography>
            <Typography>123</Typography>
          </Box>
          <Divider component="li"  />
          <Box sx={{ display: 'flex', justifyContent: 'space-between',mt:2 }}>
            <Typography>Средний охват:</Typography>
            <Typography>223</Typography>
          </Box>
          <Divider component="li"  />
          <Box sx={{ display: 'flex', justifyContent: 'space-between',mt:2 }}>
            <Typography>Тематика:</Typography>
            <Typography>223б, ыаваы, ывавы, выаыв</Typography>
          </Box>
          <Divider component="li" />
          <Box sx={{ display: 'flex', justifyContent: 'space-between',mt:2 }}>
            <Typography>Депозит для выкупа товара:</Typography>
            <Typography>1900.0₽</Typography>
          </Box>
          <Divider component="li" />
        </List>
      </CardContent>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Принять заявку</Button>
      <Button variant="outlined" color="error">Отклонить</Button>
      </Stack>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
