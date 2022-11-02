import { Input, Box, Button } from '@mui/material'

const Filters = () => {
  return (
    <Box flexDirection='column'>
      <Input type='datetime-local' />
      <Input type='datetime-local' />
      <Input type='text' />
    </Box>
  )
}

export default Filters
