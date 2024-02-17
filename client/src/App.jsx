import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyJobs from './pages/MyJobs'
import {Route,Routes} from 'react-router-dom';
import CreateJob from './pages/CreateJob';
import Salary from './pages/Salary';
import UpdateJobs from './pages/UpdateJobs';
import Contact from './pages/Contact';
import JobModal from './pages/JobModal';
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post-job' element={<CreateJob/>}/>
        <Route path='/my-job' element={<MyJobs/>}/>
        <Route path='/salary' element={<Salary/>}/>
        <Route path='/edit-job/:id' element={<UpdateJobs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/job/:id' element={<JobModal/>}/>
      </Routes>
    </>
  )
}

export default App