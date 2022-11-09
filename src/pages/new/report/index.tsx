import { useState } from 'react'

import { Box, Card, Typography, TextField, Button } from '@mui/material'
import { addNewReport } from '../../../framework/report/addnewReport'

type State = string | undefined

const newReport = () => {
  const [machine, setMachine] = useState<State>()
  const [value, setValue] = useState<State>()

  const handleCreateReport = async () => {
    if (machine && value) {
      const response = await addNewReport({ machine, value })
    }
  }

  return (
    <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center'>
      <Card
        sx={{
          padding: 10,
          width: 650,
          height: 450
        }}
      >
        <Typography textAlign='center' variant='h4'>
          Adicionar
        </Typography>
        <Box
          width='100%'
          height='70%'
          mt={15}
          flexDirection='column'
          display='flex'
          alignItems='center'
          justifyContent='space-around'
        >
          <Typography>Maquina</Typography>
          <TextField
            type='number'
            placeholder='numero da maquina'
            onChange={e => setMachine(e.target.value)}
            value={machine}
          />
          <Typography>Valor</Typography>
          <TextField type='number' placeholder='valor final' onChange={e => setValue(e.target.value)} value={value} />
          <Button variant='contained' onClick={handleCreateReport}>
            Adicionar
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
export default newReport
