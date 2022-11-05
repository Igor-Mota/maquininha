import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

export const ListReports = ({ data }: any) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Numero</TableCell>
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
          <TableBody>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Data</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
