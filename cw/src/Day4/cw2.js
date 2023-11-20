import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

export default function Day4cwhelp2() {
  return (
    <Stack alignItems='center'>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        />
     </Stack>
  );
}

const top100Films = [
  { label: 'Grapes'},
  { label: 'orange'},
  { label: 'Watermelon'},
  
];
