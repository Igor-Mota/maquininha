import { useEffect } from 'react'
import { Card, Button, TextField, Grid, Typography, Box, Select, MenuItem } from '@mui/material'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createReport } from 'src/common/rules/validations'
import { useCreateReport } from 'src/framework/report/useCreateReport'
import 'react-toastify/dist/ReactToastify.css'

export const NewReport = () => {
  //
  const { mutate, data, status, isLoading } = useCreateReport()

  useEffect(() => {
    if (data?.status == 201) {
      toast.success('Relatorio adicionado com sucesso')
    }
  }, [data])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createReport) })

  const handleCreateReport = async (data: any) => {
    mutate(data)
    reset()
  }

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
      <Typography variant='h3' mb={6}>
        Adicionar novo relatorio
      </Typography>
      <form onSubmit={handleSubmit(handleCreateReport)}>
        <Grid container spacing={12} px={10}>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Loja</Typography>
              <Typography variant='body2' color='red'>
                {errors.store?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('store')} />
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Entrada final</Typography>
              <Typography variant='body2' color='red'>
                {errors.final_enter?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('final_enter')} />
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Numero da maquina</Typography>
              <Typography variant='body2' color='red'>
                {errors.machine?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('machine')} />
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Jogo</Typography>
              <Typography variant='body2' color='red'>
                {errors.game?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('game')} />
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='flex-start' mb={4}>
              <Typography variant='body2'>Saida final</Typography>
              <Typography variant='body2' color='red'>
                {errors.final_out?.message}
              </Typography>
            </Box>
            <TextField autoFocus fullWidth {...register('final_out')} />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant='contained' type='submit' disabled={isLoading}>
              Criar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
