import { string, object } from 'yup'

export const createReport = object({
  store: string().required(' : A loja e obrigatoria'),
  final_enter: string().required(' : Entrada final e obrigatoria'),
  machine: string().required(' : Numero da maquina e obrigatorio'),
  game: string().required(': Jogo e obrigatorio'),
  final_out: string().required(': Saida final e Obrigatoria')
})
