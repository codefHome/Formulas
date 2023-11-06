

// import { useQuery } from '@tanstack/react-query'
import './App.css'
// import useStore from './store/store'
// import axios from 'axios'
// import { Button, Typography } from '@mui/material'
import Formulas from './pages/Formulas'

function App() {
//  const{count,increaseCount,decreaseCount}=useStore()
// const{isPending,error,data}=useQuery({
//   queryKey:['placeHolder'],
//   queryFn:()=>axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>res.data)
// })
// console.log({data})
  return (
    <div className="bg-[#F6F8FA]">
  <Formulas/>
    </div>
    
  
   )
    {/* {isPending && <div>Loading ...</div>}
    {error && <div>Error occured</div>}
   
      <h1 className='text-5xl font-bold '>Vite + React</h1>
      <p>{count}</p>
      <div className="flex space-x-2">
        <Button sx={{
mr:'5px',
background:'red',
textTransform:'none'
        }} variant='contained' onClick={increaseCount}>
          Increase
        </Button>
        <Button variant='contained' onClick={decreaseCount}>
          Decrease
        </Button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  
  
}

export default App
