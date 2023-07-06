import { useState, useEffect } from 'react'
import BasicTabs from './components/tabs'
import { Box, Typography } from '@mui/material'


function App() {
  
  return (
    <Box m={10}>
      <Typography variant='h4' textAlign={"center"} mb={3}>MQTT React Client</Typography>
      <BasicTabs/>
    </Box>
  )

}

export default App
