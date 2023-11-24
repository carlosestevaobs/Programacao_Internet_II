import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

export default function CaixaSelecao({ valor }) {
  return (
    <Box>
      <Checkbox name={valor} color="secondary" /> {valor}
    </Box>
  );
}
