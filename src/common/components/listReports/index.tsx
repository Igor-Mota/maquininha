import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useGetLatestReports } from 'src/framework/report/useGatLatestReports'
import { dateFormat } from 'src/utils'

export const ListReports = () => {
  const { data, isLoading } = useGetLatestReports()

  if (isLoading) return <></>

  console.log(data)

  return (
    <div style={{ maxWidth: '100%' }}>
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
