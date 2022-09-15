import { Stack, Typography } from '@mui/material'
import React from 'react'

const TopLayer = () => {
  return (
    <Stack
        textAlign='center'
        width='45%'
        spacing={3}
    >
        <Typography
            variant='h1'
            sx={{
                fontSize: {
                    lg: '3.5rem',
                    xs: '3rem'
                }
            }}
        >
            Table Data UI Design
        </Typography>

        <Typography
            variant='p'
        >
            The Table component has a close mapping to the native table elements. This constraint makes building rich data tables challenging.
            The DataGrid component is designed for use-cases that are focused on handling large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.
        </Typography>
    </Stack>
  )
}

export default TopLayer