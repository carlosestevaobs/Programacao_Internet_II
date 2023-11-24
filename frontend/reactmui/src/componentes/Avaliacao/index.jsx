import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Avaliacao() {
    const [valor, setValor] = React.useState(0)
    return (
        <Box sx={{
            padding: 2
        }}>
            <Typography component="legend">Avalie seu curso</Typography>
            <Rating
                name="estrelas"
                value={valor}
                onChange={(event, novoValor) => {
                    setValor(novoValor);
                }} />
        </Box>
    );
}
