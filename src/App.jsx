import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/index'


function App() {
  return (
    <>
      <BrowserRouter>
        <Index/> {/* This renders all your routes */}
      </BrowserRouter>
    </>
  )
}

export default App

