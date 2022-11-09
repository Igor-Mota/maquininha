import { useState } from 'react'
import { queryClient } from 'src/framework/http/http'
import { API_ENDPOINTS } from 'src/framework/http/utils/endpoints'
import { useQuery } from 'react-query'
import { http } from 'src/framework/http/http'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Input,
  Typography,
  IconButton,
  Card,
  Button
} from '@mui/material'

import { ChevronDown } from 'mdi-material-ui'
import { dateFormat } from 'src/utils'

function formatUrl(init?: string, end?: string, number?: string) {
  const url = new URL('https://maquininhasas.herokuapp.com/report')
  if (init) url.searchParams.append('init', init)
  if (end) url.searchParams.append('end', end)
  if (number) url.searchParams.append('number', number)

  return url.href
}

export const ListReports = () => {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [machine, setSeMachine] = useState<string>()
  const [init, setInit] = useState<string>()
  const [end, setEnd] = useState<string>()

  const fetcher = async () => {
    const { data, status } = await http.get(formatUrl(init, end, machine))
    return {
      data,
      status
    }
  }

  const { data, isLoading } = useQuery([API_ENDPOINTS.report], fetcher)

  const handleSearch = () => {
    queryClient.fetchQuery(API_ENDPOINTS.report)
  }

  if (isLoading || !data) return <></>

  return (
    <div style={{ maxWidth: '100%' }}>
      <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
        <Box display='flex' alignItems='center' justifyContent='space-between' width={600}>
          <Typography variant='body2'>De</Typography>
          <Input type='datetime-local' onChange={e => setInit(e.target.value)} />
          <Typography variant='body2'>Ate</Typography>
          <Input type='datetime-local' onChange={e => setEnd(e.target.value)} />
        </Box>
        <Box ml={10} position='relative' mr={10}>
          <IconButton onClick={() => setFiltersOpen(current => !current)}>
            <ChevronDown />
          </IconButton>
          {filtersOpen && (
            <Box position='absolute' top={50} left={-200}>
              <Card>
                <Box padding={4}>
                  <Typography>Maquina</Typography>
                  <Input aria-label='Numero da maquina' value={machine} onChange={e => setSeMachine(e.target.value)} />
                  {/* <Typography>Jogo</Typography>
                  <Input aria-label='teste' /> */}
                </Box>
              </Card>
            </Box>
          )}
        </Box>
        <Box>
          <Button variant='contained' disabled={isLoading} onClick={handleSearch}>
            Buscar
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Numero</TableCell>
              <TableCell>Taxa</TableCell>
              <TableCell>Jogo</TableCell>
              <TableCell>E.Inicial</TableCell>
              <TableCell>E.Final</TableCell>
              <TableCell>T.Entradas</TableCell>
              <TableCell>S.Inicial</TableCell>
              <TableCell>S.Final</TableCell>
              <TableCell>T.Saidas</TableCell>
              <TableCell>Resultado</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          {data?.data.map((report: any) => {
            return (
              <TableBody>
                <TableCell>{report.machine_number}</TableCell>
                <TableCell>{report.rate}</TableCell>
                <TableCell>{report.game}</TableCell>
                <TableCell>{report.initial_enter}</TableCell>
                <TableCell>{report.final_enter}</TableCell>
                <TableCell>{report.total_enters}</TableCell>
                <TableCell>{report.initial_out}</TableCell>
                <TableCell>{report.final_out}</TableCell>
                <TableCell>{report.total_out}</TableCell>
                <TableCell>{`${report.result}%`}</TableCell>
                <TableCell>{dateFormat(report.created_at)}</TableCell>
              </TableBody>
            )
          })}
        </Table>
      </TableContainer>
    </div>
  )
}
