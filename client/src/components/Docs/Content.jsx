import { Route, Routes } from "react-router-dom"

const Content = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<div>Hello</div>} />    
            <Route path="/Dashboard" element={<div>Dashboard</div>} />    
            <Route path="/contact" element={<div>Contact</div>} />    
            <Route path="/signIn" element={<div>Signin</div>} />    
            <Route path="/signOut" element={<div>Signout</div>} />    
        </Routes> 
    </div>
    )
}

export default Content