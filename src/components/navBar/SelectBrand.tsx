import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentBrand } from '../../redux/currentBrand/currentBrandSlice';
import { RootState } from '../../redux/store';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, brand: readonly string[], theme: Theme) {
  return {
    fontWeight:
    brand.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectBrand() {
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState<string[]>([]);
  const {brand, names} = useSelector((state: RootState) => state.currentBrand);

  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent<typeof brand>) => {
    const {
      target: { value },
    } = event;
    dispatch(setCurrentBrand(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    ))
  };

  return (
    <div>
      <FormControl sx={{ width: 270, mt: 1, background:'#EEF4FC',border:'none' }}>
        <Select
          displayEmpty
          value={brand}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Выберите бренд</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Выберите бренд</em>
          </MenuItem>
          {names.map((name:string) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, brand, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
