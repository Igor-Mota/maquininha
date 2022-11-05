import MaterialTable from 'material-table'

export const ListUser = ({ data }: any) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Numero', field: 'name' },
          { title: 'Jogo', field: 'surname' },
          { title: 'E.Inicial', field: 'birthYear' },
          { title: 'E.Final', field: 'birthCity' },
          { title: 'T.Entradas', field: 'birthCity' },
          { title: 'S.Inicial', field: 'birthCity' },
          { title: 'S.Final', field: 'birthCity' },
          { title: 'T.Saidas', field: 'birthCity' },
          { title: 'Resultado', field: 'birthCity' },
          { title: 'Data', field: 'birthCity' }
        ]}
        data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
        title='Relatorios'
      />
    </div>
  )
}
