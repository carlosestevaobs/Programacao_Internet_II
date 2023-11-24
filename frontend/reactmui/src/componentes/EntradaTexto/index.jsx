import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function EntradaTexto() {
    return (       
            <TextField
                label="Nome completo"
                margin="normal"
                required
                fullWidth
            />
       
    );
}
