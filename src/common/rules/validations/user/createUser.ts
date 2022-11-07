import { string, object, mixed } from 'yup'

export const createUser = object({
  username: string().required(' : Nome de usuario e obrigatorio'),
  password: string().required(' : Senha e obrigatoria'),
  name: string().required(' : Nome e obrigatorio'),
  repeatPassword: string().required(': Repetir senha e obrigatorio'),
  level: mixed().oneOf(['admin', 'manager', 'attendant'])
})
