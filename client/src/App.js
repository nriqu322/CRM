import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<CustomerList />} />
          <Route path='/customers/new' element={<CustomerForm />} />
        </Routes>
      </Container>
    </Router>
  )
}