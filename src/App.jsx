import { useContext } from 'react'
import './App.css'
import CanvasWrapper from './Components/CanvasWrapper'
import { Context } from './Store/AppContext'
import VerticalNav from './Components/VerticalNav'

function App() {
 
  const { store, actions } = useContext(Context)


  return (
    <div className='w-screen h-screen fixed'>
      <VerticalNav />
      <CanvasWrapper />
    </div>
  )
}

export default App
