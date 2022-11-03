import { Input, Box, Button } from '@mui/material'
import { useSession } from 'src/@core/hooks/useSession'

const Filters = () => {
  useSession()
  return (
    <Box flexDirection='column'>
      <Input type='datetime-local' />
      <Input type='datetime-local' />
      <Input type='text' />
    </Box>
  )
}

export default Filters
