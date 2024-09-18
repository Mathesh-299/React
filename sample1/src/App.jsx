import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Project from './Pages/Project';
import './assets/css/style.css';
export const App = () => {
  return (
    
   <>
    {/* <Navbar/>
   */}
    {/* <Contact/> */}
    {/* <Project/> */}

    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Profile/>}></Route>
      <Route path={'/project'} element={<Project/>}></Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    

   </>

  )
}

export default App;
