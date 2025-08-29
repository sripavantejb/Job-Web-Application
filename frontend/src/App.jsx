import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom'
import PostJob from './components/PostJob'
import About from './components/About'
import JobFeed from './components/JobFeed'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1 className='text-center mt-20 text-3xl font-bold'>404 Not Found</h1>} />
        <Route path='/post' element={<PostJob></PostJob>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs' element={<JobFeed/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}




export default App
