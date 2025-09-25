
import { Box, Container, Grid, Stack } from '@mui/material'

import Header from './header'
import './App.css'

function App() {
  
  return (
    <Container maxWidth="xl">
      <Stack direction='row' spacing={10} justifyContent='center'>
        <Stack>
          <Header />
        </Stack>
        <Stack>
          <Header />
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
  // return (
  //   <>
  //   <Header />
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
      
  //   </>
  // )