import { Box, Button } from '@mui/material'
import React from 'react'
import ToolbarSearch from './ToolbarSearch'
import AddTask from './AddTask'

const TableToolbar = ({ query, setQuery, openTaskModal, setOpenTaskModal, setData, data }) => {
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

        {
            (!openTaskModal) && (
                <Button
                    variant='contained'
                    sx={{
                        marginRight: '10px'
                    }}
                    onClick={() => setOpenTaskModal(!openTaskModal)}
                >
                    Create Task
                </Button>
            )
        }

        {
            openTaskModal && <AddTask 
                                openTaskModal={openTaskModal} 
                                setOpenTaskModal={setOpenTaskModal}
                                data={data}
                                setData={setData}
                            />
        }
    </Box>
  )
}

export default TableToolbar