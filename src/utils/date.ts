export const dateFormat = (payload: string) => {
  const date = new Date(payload)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const string = `${addZero(day)}/${addZero(month)}/${year}`

  return string
}

export const addZero = (payload: string | number) => {
  const str = payload.toString()
  return str.length === 1 ? `0${str}` : str
}
