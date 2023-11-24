import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Botao() {
    return <Box sx={{
        padding: 2
    }}>
        <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: 'green', color: 'white' }}
        >
            Enviar avaliação
        </Button>
    </Box>;
}
