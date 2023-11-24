import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EntradaTexto from './componentes/EntradaTexto';
import CaixaSelecao from './componentes/CaixaSelecao';
import Botao from './componentes/Botao';
import Avaliacao from './componentes/Avaliacao';

const backgroundImg = '/imagens/woods.jpg';

function App() {
  return (
    <Box component="main">
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} >
          <Box
            sx={{             
              mx: 4,
              display: 'flex',
              flexDirection: 'column',   
              justifyContent: 'center',
              height: '100%'           
            }}
          >
            <Typography variant="h5" component="div">
              Avalie seu curso
            </Typography>
            <Box component="form">
              <EntradaTexto />
              <Box>
                <Typography mt={2}>Curso(s):</Typography>
                <CaixaSelecao valor="ADS" />
                <CaixaSelecao valor="Administração" />
                <CaixaSelecao valor="Física" />
                <CaixaSelecao valor="Matemática" />
              </Box>
              <Avaliacao/>
              <Botao />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;
