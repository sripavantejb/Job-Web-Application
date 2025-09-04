import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PostJob from './components/PostJob'
import About from './components/About'
import JobFeed from './components/JobFeed'
import PostSuccessPage from './components/PostSuccessPage'
import Applicants from './components/Applicants'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs' element={<JobFeed/>}/>

        <Route element={<ProtectedRoute />}> 
          <Route path='/post' element={<PostJob />} />
          <Route path='/postsuccesspage' element={<PostSuccessPage/>} />
          <Route path='/applicants' element={<Applicants/>} />
        </Route>

        <Route path='*' element={<h1 className='text-center mt-20 text-3xl font-bold'>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}




export default App
