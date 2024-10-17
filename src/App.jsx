import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Addjob, Editjob, Jobdetails, Joblist, Register, Login, NotFound } from '../pages/index'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Joblist/>}/>
      <Route path='/addjob' element={<Addjob/>}/>
      <Route path='/editjob' element={<Editjob/>}/>
      <Route path='/jobdetails' element={<Jobdetails/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/list' element={<Joblist/>}>
      <Route index element={<Joblist/>}/>
      <Route path=':id' element={<Jobdetails/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


