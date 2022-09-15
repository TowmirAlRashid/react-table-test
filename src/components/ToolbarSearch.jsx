import { Box, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const ToolbarSearch = ({ query, setQuery }) => {
  return (
    <Box
        sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            m: '7px 12px', 
            border: '1px solid rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            width: '400px'
        }}
    >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>

        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
    </Box>
  )
}

export default ToolbarSearch