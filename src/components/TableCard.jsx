import { Box, Paper } from '@mui/material'
import React from 'react'
import MainTable from './MainTable'

const TableCard = () => {
  return (
    <Box
        sx={{
            width: {
                lg: '85%',
                sm: '95%'
            }
        }}
    >
        <Paper
            elevation={2}
        >
            <MainTable />
        </Paper>
    </Box>
  )
}

export default TableCard