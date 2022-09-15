import { Box, Button } from '@mui/material'
import React from 'react'
import ToolbarSearch from './ToolbarSearch'

const TableToolbar = ({ query, setQuery }) => {
  return (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
    >
        <ToolbarSearch query={query} setQuery={setQuery} />

        <Button
            variant='contained'
            sx={{
                marginRight: '10px'
            }}
        >
            Create Task
        </Button>
    </Box>
  )
}

export default TableToolbar