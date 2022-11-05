import { Box, Card, Button, TextField } from '@mui/material'
export const NewUser = () => {
  return (
    <Card
      sx={{
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        py: 8
      }}
    >
      <Box>
        <TextField autoFocus label='Loja' sx={{ marginBottom: 4 }} value='' onChange={e => {}} />
      </Box>
      <Box>
        <TextField autoFocus label='Maquina' sx={{ marginBottom: 4 }} value='' onChange={e => {}} />
      </Box>
      <Box>
        <TextField autoFocus label='Valor' sx={{ marginBottom: 4 }} value='' onChange={e => {}} />
      </Box>
      <Box width='30%'>
        <Button fullWidth variant='contained'>
          Enviar
        </Button>
      </Box>
    </Card>
  )
}
