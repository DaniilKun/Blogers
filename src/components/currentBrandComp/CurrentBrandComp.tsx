import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CurrentBrandComp = () => {
  const { brand } = useSelector((state: RootState) => state.currentBrand);

  return (
    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
      Текущий бренд:
      <Typography
        boxShadow={2}
        sx={{ border: '1px solid black', width: 'max-content', p: 1, borderRadius: 5 }}>
        {brand}
      </Typography>
    </Box>
  );
};

export default CurrentBrandComp;
