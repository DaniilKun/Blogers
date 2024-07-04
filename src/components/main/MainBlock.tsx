import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import iconFeedback from '../../assets/feedback.png';
import groupAvaBlogrers from '../../assets/groupAvaBlogrers.png';
import logoBrand from '../../assets/logoBrand.png';
import barter from '../../assets/barter.png';
import telegramBot from '../../assets/telegramBot.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MainModal from './MainModal';

const MainBlock = () => {
  return (
    <Box sx={{ paddingTop: 2, display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: '710px',
        }}>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 2,

              backgroundColor: '#e3f2fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '20px',
            }}>
            <Box>
              <Typography variant="h6">Консультация с менеджером</Typography>
              <Typography variant="caption">
                Консультант поможет разобраться с платформой и ответит на все вопросы
              </Typography>
              <MainModal />
            </Box>
            <img src={iconFeedback} alt="feedback" style={{ width: '100px' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderRadius: '20px',
              height: '220px',
            }}>
            <Box>
              <Typography variant="h6">BARTER.DO</Typography>
              <Typography variant="body2">
                Помогаем компаниям быстро, эффективно и прозрачно доносить ценность своих
                предложений до широкой аудитории через микро и нано блогеров
              </Typography>
            </Box>

            <img src={barter} alt="feedback" style={{ width: '100px', marginTop: '50px' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              borderRadius: '20px',
              height: '220px',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '20px',
              }}>
              <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                Блогеры и как мы их проверяем
              </Typography>
              <Typography variant="body2">Более 70% блогеров отсеивается при модерации</Typography>
              <Button
                variant="contained"
                color="inherit"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                }}>
                <Typography variant="body2">Подробнее</Typography>
              </Button>
            </Box>
            <img src={groupAvaBlogrers} alt="feedback" style={{ width: '120px' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderRadius: '20px',
              height: '245px',
              position: 'relative',
            }}>
            <Box>
              <Typography variant="h6">
                Telegram
                <br /> Bot
              </Typography>
              <Typography variant="body2" marginTop={2}>
                Подключите нашего бота и уведомления о заявках от новых блоггеров и сдачи ими
                заданий
              </Typography>
              <Button
                variant="contained"
                color="inherit"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                  marginTop: '22px',
                }}>
                <Typography variant="body2">Подключить</Typography>
              </Button>
            </Box>

            <img src={telegramBot} alt="feedback" style={{ width: '100px', marginTop: '70px' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              borderRadius: '20px',
              height: '245px',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-between',
                gap: '20px',
              }}>
              <Box>
                <Typography variant="h6" sx={{ lineHeight: 1.2, marginBottom: '20px' }}>
                  Логотипы брендов
                </Typography>
                <Typography variant="body2">
                  С детальной статистикой <br /> и рекламой блогеров
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="inherit"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: 'none',
                }}>
                <Typography variant="body2">Подробнее</Typography>
              </Button>
            </Box>
            <img src={logoBrand} alt="feedback" style={{ width: '120px' }} />
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: 2, maxWidth: '400px' }}>
          <Typography variant="h6">Как происходит взаимодействие?</Typography>
          <Typography variant="body1">
            <span style={{ color: '#76ff03' }}>• Требуется ваше участие</span> <br />
            <span style={{ color: '#757575' }}>• Работает без вашего участия</span>
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">
              1. Выбираете и оплачиваете тариф{' '}
              <Button variant="contained" color="success">
                Выбрать тариф
              </Button>
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              2. В течение 24 часов с вами связывается ваш персональный менеджер
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};

export default MainBlock;
