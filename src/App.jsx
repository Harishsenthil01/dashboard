
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Mode, Palette } from '@mui/icons-material'


const App = () => {

  const [mode, setMode] = useState("light")

const darkTheme = createTheme({
  palette: {
    mode: mode,
  }
})

  return (
    <ThemeProvider theme={darkTheme}>
  <Box bgcolor={'background.default'}  color={'text.primary'}>
    <Navbar />
    <Stack direction="row" justifyContent={'space-between'} spacing={2}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
     </Stack>
     <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App
