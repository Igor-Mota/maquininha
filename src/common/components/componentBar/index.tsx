import { SetStateAction, useState } from 'react'
import { Box, Typography, Card, Button } from '@mui/material'

interface Props {
  items: { name: string }[]
  active: string
  onClick?: (e: any) => void
  change: React.Dispatch<SetStateAction<string>>
}

export const ComponentBar = ({ items, active, change, onClick }: Props) => {
  return (
    <Card
      sx={{
        width: '80%',
        height: 50,
        margin: '0 auto',
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {items.map(item => {
        return (
          <Box width={`${(items.length / 2) * 50}%`} height='100%' margin={0} key={item.name}>
            <Button
              onClick={e => {
                change(item.name)
                onClick && onClick(e)
              }}
              sx={{
                width: '100%',
                height: '100%',
                borderBottom: active === item.name ? '3px solid #9155FD' : 'none'
              }}
            >
              <Typography textAlign='center'>{item.name}</Typography>
            </Button>
          </Box>
        )
      })}
    </Card>
  )
}
