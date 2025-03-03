import { useContext } from 'react'
import './App.css'

import { Context } from './Store/AppContext'
import VerticalNav from './Components/VerticalNav'

function App() {
 
  const { store, actions } = useContext(Context)


  return (
    <div className='bg-grey-500 text-5xl w-screen h-screen fixed'>
      <VerticalNav />
    </div>
  )
}

export default App
